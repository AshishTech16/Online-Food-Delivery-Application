const express = require("express");
const foodRouter = express.Router();
const {addFood, getAllFoods, foodById} = require("../controllers/food-controller");

foodRouter.post("/",addFood);
foodRouter.get("/",getAllFoods);
foodRouter.get("/:id",foodById);

module.exports = foodRouter;