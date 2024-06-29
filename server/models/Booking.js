const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
    food: {
        type: mongoose.Types.ObjectId,
        ref: "Food",
        required: true
    },
    address: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    user: {
       type: mongoose.Types.ObjectId,
       ref: 'User',
       required: true
    }
});

const Booking = mongoose.model('Booking',bookingSchema);
module.exports = Booking;
