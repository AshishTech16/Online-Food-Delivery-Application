const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({

    title : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    price : {
        type : Number,
        required: true
    },
    posterUrl : {
        type : String,
        required: true
    },
    booking: [
        {
            type : mongoose.Types.ObjectId,
            ref: "Booking"
        }
    ],
    admin : {
            type : mongoose.Types.ObjectId,
            ref : "Admin",
            required : true
    }
})

const Food = mongoose.model('Food',foodSchema);
module.exports = Food;