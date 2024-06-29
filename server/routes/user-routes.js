const express = require('express');
const userRouter = express.Router();
const { getAllUsers,signup,updateUser,deleteUser,login,
getUserById,getBookingsOfUser} = require("../controllers/user-controller");

userRouter.get("/",getAllUsers);
userRouter.get("/:id",getUserById);
userRouter.post("/signup",signup);
userRouter.patch("/:id",updateUser);
userRouter.delete("/:id",deleteUser);
userRouter.post("/login",login);
userRouter.get("/booking/:id",getBookingsOfUser);


module.exports = userRouter;