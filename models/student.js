const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    class: String,
    gender: String,
    batchYear: Number
});

module.exports = mongoose.model("student", studentSchema);
