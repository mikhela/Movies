const express = require("express");
const { userRouter } = require("./routes/user");

const app = express();

app.use("/user", userRouter);

const port = 3000;
const host = "localhost";

app.listen(port, host, () => {
  console.log(`Example app listening at http://${host}:${port}`);
});
