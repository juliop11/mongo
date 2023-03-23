const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    login: {
        type: String
    },
    password: {
        type: String,
        require: true,
        validate: [
            function (password) {

                return password.length >= 6;
            },
            'El password debe tener minimo 6 caracteres'],
        select: false
    }
})

module.exports = mongoose.model("User", userSchema)