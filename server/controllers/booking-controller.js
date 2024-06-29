const mongoose = require('mongoose');
const Food = require('../models/Food');
const User = require('../models/User');
const Bookings  = require('../models/Booking'); 

// Food Booking By User.
const createBooking = async (req, res, next) => {
    const { food, address, time, user } = req.body;
    if (!address || !time) {
      return res.status(400).json({ message: "Address and time are required" });
  }
    let foodExist;
    let userExist;
  
    try {
        foodExist = await Food.findById(food);
        userExist = await User.findById(user);
  
      if (!foodExist) {
        return res.status(404).json({ message: "Food not found by given id" });
      }
  
      if (!userExist) {
        return res.status(404).json({ message: "User not found by given id" });
      }
    } catch (e) {
      return res.send(e.message);
    }
  
    let newBooking;
    try {
      newBooking = new Bookings({
        food,
        address,
        time,
        user
      });
  
      const session = await mongoose.startSession();
      session.startTransaction();
      if (userExist.bookings) {
        userExist.bookings.push(newBooking);
      } else {
        userExist.bookings = [newBooking];
      }
  
      if (foodExist.bookings) {
        foodExist.bookings.push(newBooking);
      } else {
        foodExist.bookings = [newBooking];
      }
  
      await userExist.save({ session });
      await foodExist.save({ session });
      await newBooking.save({ session });
  
      session.commitTransaction();
    } catch (e) {
      res.send(e.message);
    }
  
    if (!newBooking) {
      res.status(400).json({
        message: "something Went Wrong",
      });
    }
    console.log(newBooking);
    return res.status(201).json({ newBooking });
  };

// Delete Food Booking By User
const deleteBooking = async (req, res, next) => {
    const id = req.params.id;
    let booking;
    try {
        booking = await Bookings.findOneAndDelete(id).populate("user food");
        console.log(booking);
        const session = await mongoose.startSession();
        session.startTransaction();
       await booking.user.bookings.pull(booking);
       await booking.food.bookings.pull(booking);
        
        await booking.food.save({ session });
        await booking.user.save({ session });
        session.commitTransaction(); 
    }
    catch (err) {
        return console.error(err);
    }
    if (!booking) {
        return res.status(404).json({ message: "Booking not found by given id" });
    }
    
    return res.status(200).json({ message: "Booking deleted successfully" });
  }


module.exports = { createBooking, deleteBooking };


