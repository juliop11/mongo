const mongoose = require("mongoose");

const schemaProfile = new mongoose.Schema({
    name: {
        type: String,
        enum: ["carlos", "rafa", "carla"]
    },
    surname: {
        type: Number
    },
    dateOfBirth: {
        type: Date
    },
    comments: {
        type: String
    },
    rol: {
        type: String,
        required: true
    }
})


schemaProfile.pre('save', function (next) {

    if (this.dateOfBirth > 1989 - 01 - 01 && this.dateOfBirth < 1999 - 01 - 01) {

        console.log("Tu edad esta entre los 24 y los 34 años");
        next();
    }
    else
        console.log("Tienes mas de 34 años");
});

module.exports = mongoose.model("Profile", schemaProfile)