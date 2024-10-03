const { connectToDatabase } = require("../db");

const registerUser = async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection("users");
  const userData = req.body;
  await collection.insertOne(userData);
  res.send("User registered successfully");
};

const getAllUsers = async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection("users");
  const users = await collection.find({}).toArray();
  res.send(users);
};

module.exports = {
  registerUser: registerUser,
  getAllUsers: getAllUsers,
};
