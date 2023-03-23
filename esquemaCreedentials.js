const mongoose = require("mongoose");

const schemaCreedentials = new mongoose.Schema({
    address: {
        type: String
    },
    phone: {
        type: Number
    },
    email:{
        type:String
    }
})


module.exports = mongoose.model("Creedentials", schemaCreedentials)