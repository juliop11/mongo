const mongoose = require("mongoose");

const esquemaTeacher = new mongoose.Schema(
    {
        teacher_first_name: String,

        teacher_last_name: String
    })


module.exports = mongoose.model("Teacher", esquemaTeacher)