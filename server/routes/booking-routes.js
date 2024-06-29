const express = require("express");
const {createBooking, deleteBooking } = require("../controllers/booking-controller");
const bookingRouter = express.Router();

bookingRouter.post('/',createBooking);
bookingRouter.delete('/:id',deleteBooking);

module.exports = bookingRouter;