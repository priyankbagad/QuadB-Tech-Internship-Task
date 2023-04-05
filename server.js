
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//mongo conn and config 
dotenv.config();
connectDB();
//express app
const app = express();
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/api/v1/", require("./routes/basicRoutes"));
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running on port ${process.env.PORT}`
  );
})
