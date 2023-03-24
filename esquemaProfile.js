const mongoose = require("mongoose");

const schemaProfile = new mongoose.Schema({
    name: {
        type: String,
        enum: ["carlos", "rafa", "carla"]
    },
    surname: {
        type: String
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

    if (this.dateOfBirth > new Date(1989, 1,1) && this.dateOfBirth < new Date(1999, 1,1)) {

        console.log("Tu edad esta entre los 24 y los 34 años");
        next();
    }
    else
        console.log("Tienes mas de 34 años");
});

module.exports = mongoose.model("Profile", schemaProfile)