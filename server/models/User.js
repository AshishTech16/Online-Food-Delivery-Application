const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength : 6
    },
    bookings: [{
        type : mongoose.Types.ObjectId,
        ref: 'Booking',
        required: true
    }]
})

const User = mongoose.model('User',UserSchema);
module.exports = User;