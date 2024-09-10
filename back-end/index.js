const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const { userRouter } = require("./routes/user");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use("/user", userRouter);

const port = 3000;
const host = "localhost";

const setupDb = async () => {
  const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
};

app.listen(port, host, async () => {
  await setupDb();
  console.log(`Example app listening at http://${host}:${port}`);
});
