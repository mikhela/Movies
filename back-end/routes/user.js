const express = require("express");
const { registerUser, getAllUsers } = require("../controllers/user");

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/register", registerUser);

module.exports = {
  userRouter: userRouter,
};
