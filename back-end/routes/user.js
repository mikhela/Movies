const express = require("express");
const { registerUser } = require("../controllers/registerUser");

const userRouter = express.Router();

userRouter.post("/register", registerUser);

module.exports = {
  userRouter: userRouter,
};
