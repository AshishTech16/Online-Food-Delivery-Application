const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
const adminRouter = require('./routes/admin-routes');
const FoodRouter = require('./routes/Food-routes');
const bookingsRouter = require('./routes/booking-routes');
const bodyParser = require('body-parser');
dotenv.config();

const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization'); 
    next();
})

// Middlewares
app.use(express.json());
app.use("/user",userRouter);
app.use("/admin", adminRouter);
app.use("/food", FoodRouter);
app.use("/booking", bookingsRouter);


mongoose.connect("mongodb+srv://ashishstocks01:fAYyzudQ2KBEpXBJ@cluster0.lggdnhq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("DATABASE CONNECTED");
});

app.listen(3750, () =>{
    console.log(`Connected to localhost port ${3750}`);
})


// MADE BY ASHISH KUMAR [20-5-2024 TO 29-6-2024]