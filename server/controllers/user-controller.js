const User = require("../models/User");
const bcrypt = require("bcryptjs");
const Booking = require("../models/Booking");

// Getting All Users
const getAllUsers = async (req, res) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Unexpected Error"
        });
    }

    if (!users) {
        return res.status(500).json({
            message: "No Users Found"
        });
    }
    return res.status(200).json({ users });
};

// User Signup
const signup = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password || name.trim() === "" || email.trim() === "" || password.trim() === "") {
        return res.status(422).json({
            message: "Invalid Inputs"
        });
    }

    const hashedPwd = bcrypt.hashSync(password);
    let user;
    try {
        user = new User({ name, email, password: hashedPwd });
        user = await user.save();
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Unexpected Error"
        });
    }

    return res.status(201).json({ id: user._id });
};

// Update User
const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, email, password } = req.body;

    if (!name || !email || !password || name.trim() === "" || email.trim() === "" || password.trim() === "") {
        return res.status(422).json({
            message: "Invalid Inputs"
        });
    }

    const hashedPwd = bcrypt.hashSync(password);
    let user;
    try {
        user = await User.findByIdAndUpdate(id, {
            name,
            email,
            password: hashedPwd
        }, { new: true });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong"
        });
    }

    if (!user) {
        return res.status(500).json({
            message: "User not found"
        });
    }

    return res.status(200).json({
        message: "Updated Successfully",
        user
    });
};

// Delete User By Id
const deleteUser = async (req, res) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong"
        });
    }

    if (!user) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }

    return res.status(200).json({
        message: "User Deleted Successfully"
    });
};

// User Login
const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password || email.trim() === "" || password.trim() === "") {
        return res.status(422).json({
            message: "Invalid Inputs"
        });
    }

    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong"
        });
    }

    if (!existingUser) {
        return res.status(400).json({
            message: "User not found"
        });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

    if (!isPasswordCorrect) {
        return res.status(400).json({
            message: "Incorrect password"
        });
    }

    return res.status(200).json({
        message: "Login successful",
        id: existingUser._id
    });
};

// Get User By Id
const getUserById = async (req, res) => {
    const id = req.params.id;
    let user;

    try {
        user = await User.findById(id);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong"
        });
    }

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    return res.status(200).json({
        message: "User retrieved successfully",
        user
    });
};

// Getting Bookings of a user
const getBookingsOfUser = async (req, res) => {
    const id = req.params.id;
    let bookings;
    try {
        bookings = await Booking.find({ user: id }).populate("user food");
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong"
        });
    }

    if (!bookings) {
        return res.status(404).json({
            message: "Bookings not found"
        });
    }

    return res.status(200).json({
        message: "Bookings retrieved successfully",
        bookings
    });
};

module.exports = {
    getAllUsers,
    signup,
    updateUser,
    deleteUser,
    login,
    getUserById,
    getBookingsOfUser
};
