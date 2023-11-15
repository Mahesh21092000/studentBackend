const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
 {
    firstNmae: {type:"String"},
    lastName: { type: "String"},
    email: {type:"String"},
    contact: {type:"Number"},
    parntName:{type:"String"},
    parentContect:{typr:"Number"},
 },
 {
    collection: "Students",
 }
);

module.exports = mongoose.model("Students", studentSchema);