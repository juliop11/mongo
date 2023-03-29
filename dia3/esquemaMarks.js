const mongoose = require("mongoose");
const Teacher = require("./esquemaTeacher");

const esquemaMarks = new mongoose.Schema(
    {
        date: Date,
        mark: Number,
        student_first_name:String,
        student_last_name:String,
        group_name:String,
        subject_name:String,
        teachers:[Teacher.schema]
    })


module.exports = mongoose.model("Marks", esquemaMarks)