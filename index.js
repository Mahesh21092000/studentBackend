const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const studentRoutes = require("./controler/studentRoutes");
const app = express();

mongoose.set("strictQuery", true);
const uri =
  "mongodb+srv://mahesh:maheshmekala@cluster0.srolpap.mongodb.net/MyHighSchool";

mongoose.connect(uri);

const db = mongoose.connection;

db.on("open", () => {
  console.log("Database Connectecd");
});

db.on("error", (error) => {
  console.log("error while connecting db ", error);
});

app.use(cors()); //instatantiation cors
app.use("/students", studentRoutes);

const port = 5000;
app.listen(port, () => {
  console.log("server listening port", port);
});
