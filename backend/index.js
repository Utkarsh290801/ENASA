const express = require("express");
const app = express();
const api_config = require("./config");
const port = api_config.port;
const userRouter = require("./router/userRouter");
const contactRouter = require("./router/contactRouter");
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/user", userRouter);
app.use("/contact", contactRouter);
// app.use("/util", utilRouter);

app.use(express.static("./static/uploads"));

app.get("/home", (req, res) => {
  res.send("hello express");
});
app.listen(port, () => {
  console.log("the server has been started");
});
