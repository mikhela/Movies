const { connectToDatabase } = require("../db");

const registerUser = async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection("users");
  const userData = req.body;
  await collection.insertOne(userData);
  res.send("User registered successfully");
};

module.exports = {
  registerUser: registerUser,
};
