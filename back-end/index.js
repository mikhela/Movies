const express = require("express");
const { userRouter } = require("./routes/user");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use("/user", userRouter);

const port = 3000;
const host = "localhost";

app.listen(port, host, async () => {
  console.log(`Example app listening at http://${host}:${port}`);
});
