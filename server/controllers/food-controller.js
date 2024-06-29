const jwt = require("jsonwebtoken");
const Food = require("../models/Food");
const Admin = require("../models/Admin"); 
const mongoose = require("mongoose");

// Adding Foods By Admin
const addFood = async (req, res) => {
    
    // Admin Verification
    const extractedToken = req.headers.authorization && req.headers.authorization.split(" ")[1];
    if (!extractedToken || extractedToken.trim() === "") {
        return res.status(404).json({ message: "Token not found" });
    }

    let adminId;
    // Token Verify
    try {
        const decrypted = jwt.verify(extractedToken, process.env.SECRET_KEY);
        adminId = decrypted.id;
    } catch (err) {
        return res.status(400).json({ message: `${err.message}` });
    }

    // Adding new food by admin after token verification
    const { title, description, price, posterUrl } = req.body;

    if (
        !title || title.trim() === '' || 
        !description || description.trim() === '' || 
        !price || price.trim() === '' || 
        !posterUrl || posterUrl.trim() === ''
    ) {
        return res.status(422).json({
            message: 'Invalid Inputs'
        });
    }

    let food;

    try {
        food = new Food({
            title,
            description,
            price,
            posterUrl,
            admin: adminId
        });
        const session = await mongoose.startSession();
        const adminUser = await Admin.findById(adminId);

        session.startTransaction();
        await food.save({ session });
        adminUser.addedFoods.push(food);
        await adminUser.save({ session });

        await session.commitTransaction();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    if (!food) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
    return res.status(201).json({ food });
};

// Get All Foods
const getAllFoods = async (req, res) => {
    let foods;
    try {
        foods = await Food.find();
    } catch (err) {
        return res.status(500).json({
            message: "Request Failed"
        });
    }
    if (!foods) {
        return res.status(500).json({
            message: "No Foods Found"
        });
    }
    return res.status(200).json({ foods });
};

// Get Food By Id
const foodById = async (req, res) => {
    const id = req.params.id;
    let food;
    try {
        food = await Food.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!food) {
        return res.status(404).json({
            message: "Invalid Food Id"
        });
    }
    return res.status(200).json({
        food
    });
};

module.exports = { addFood, getAllFoods, foodById };
