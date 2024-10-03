const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

let client;
let db;

const connectToDatabase = async () => {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    try {
      await client.connect();
      db = client.db("movies");
      console.log("Successfully connected to MongoDB!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }

  return db;
};

module.exports = {
  connectToDatabase,
  getDb: () => db,
};
