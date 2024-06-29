const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

// Making Middleware Functions for Admin Operations.

const addAdmin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    let adminExist;

    try {
        adminExist = await Admin.findOne({ email });
    } catch (err) {
        console.error('Error finding admin:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }

    if (adminExist) {
        return res.status(400).json({ message: 'Admin already exists' });
    }

    const saltRounds = 10;
    let hashedpwd;
    
    try {
        hashedpwd = bcrypt.hashSync(password, saltRounds);
    } catch (err) {
        console.error('Error hashing password:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }

    let admin;

    try {
        admin = new Admin({
            email,
            password: hashedpwd
        });
        admin = await admin.save();
    } catch (err) {
        console.error('Error saving admin:', err);
        return res.status(500).json({ message: 'Admin creation failed' });
    }

    if (!admin) {
        return res.status(500).json({ message: 'Admin creation failed' });
    }

    return res.status(201).json({ admin });
};



// Admin Login
const adminLogin = async (req,res) => {
    const {email,password} = req.body;

    if(!email && email.trim() === "" 
                && 
    !password && password.trim() === ""){
        return res.status(422).json({ message : "Invalid Inputs"});
    }

    let adminExist;
    try{
        adminExist = await Admin.findOne({email});
    } catch(err){
        return console.log(err);
    } 

    if(!adminExist){
        return res.status(400).json({ message : "Admin Not found"});
    }

    const isPasswordCorrect = bcrypt.compareSync(password,adminExist.password);
    
    if(!isPasswordCorrect){
        return res.status(400).json({
            message : "Email or Password incorrect"
        });
    }

    const token = jwt.sign({id: adminExist._id }, process.env.SECRET_KEY , {
        expiresIn : "3d",
    });

    return res.status(200).json({
        message: "Authentication Successful",
        token,
        id: adminExist._id
    });
}

// Getting All Admins.
const getAdmins = async(req,res) => {
    let admins;

    try{
        admins = await Admin.find();
    } catch(err){
        console.log(err);
    }

    if(!admins){
        return res.status(400).json({
            message: "Cannot find Admins"
        })
    }
    
    return res.status(200).json({admins});
}

// Getting One Admin By ID.
const getAdminById = async (req,res) => {
    const id = req.params.id;
    let admin;

    try{
        admin = await Admin.findById(id).populate("addedFoods");
    } catch (err){
        console.log(err);
    }

    if(!admin){
        res.status(400).json({
            message: "Admin Not Finded By Id"
        })
    }

    return res.status(200).json({admin});  
}

// Delete a Admin from Id.
const deleteAdminById = async(req,res)=>{
    let id = req.params.id;
    let admin;
    try{
        admin = await Admin.findByIdAndDelete(id);
    } catch(err){
        return console.log(err);
    }

    if(!admin){
        return res.status(500).json({
            message : "Something Went Wrong"
        });
    }
    res.status(200).json({
        message : "Admin Deleted Successfully"
    });
}

module.exports = {addAdmin,adminLogin,getAdmins,getAdminById,deleteAdminById};
