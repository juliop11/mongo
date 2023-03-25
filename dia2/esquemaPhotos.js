const mongoose = require("mongoose");

const esquemaFotos = new mongoose.Schema({
    nombre: {
        type: String
    },
    foto: {
        type: String
    },
    titulo: {
        type: String
    },
    descripcion: {
        type: String
    }
})


module.exports = mongoose.model("Fotos", esquemaFotos)