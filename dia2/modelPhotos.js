let mongoose = require("mongoose");
let Fotos = require("./esquemaPhotos")

mongoose.connect('mongodb+srv://julioperez:Puertollano1@cluster0.skczjsh.mongodb.net/codenotch',
    { useNewUrlParser: false, useUnifiedTopology: false })

let users = [
    {
        nombre: "alberto",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTYvPkNXU09A_Ny1w-5hUqiC5ToJo3ZLGt2g&usqp=CAU",
        titulo: "Surf",
        descripcion: "Me gusta el mar y hacer surf"
    },
    {
        nombre: "rosa",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59CB6_0S9VZssN6dPeeqxI2iP5ZX7Xxp0wg&usqp=CAU",
        titulo: "En la playa",
        descripcion: "De vacaciones con la familia"
    },
    {
        nombre: "luis",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSOP1ohUd0BosUWExISEORCCgI_DpU0VhCg&usqp=CAU",
        titulo: "La montaña",
        descripcion: "Me encanta hacer senderismo"
    },
    {
        nombre: "bea",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBiXjw6EN7hKm6_eSmFIRyO3gvA08iCnhJOA&usqp=CAU",
        titulo: "Formula 1",
        descripcion: "Competir en la F1 es mi pasion"
    }
]

////INSERTA EL ARRAY DE OBJETOS DE LOS USUARIOS EN LA BASE DE DATOS
// Fotos.insertMany(users)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err)
//     })


////DADO UN USUARIO OBTENER TODAS SUS FOTOS.
// Fotos.findOne({ nombre: "luis" })
//     .then((users) => {

//         console.log(users.foto);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


////DADO EL TITULO DE UNA FOTO Y UNA DESCRIPCION, MODIFICAR SU DESCRIPCION.
// Fotos.updateOne({ foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBiXjw6EN7hKm6_eSmFIRyO3gvA08iCnhJOA&usqp=CAU", descripcion: "Competir en la F1 es mi pasion" }, { descripcion: "Me gustan los coches", verified: false })
//     .then((dato) => {
//         console.log("Se ha modificado correctamente");
//         console.log(dato);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


////DADO UN USUARIO Y UN TITULO DE FOTO ELIMINAR SU FOTO
// Fotos.deleteOne({ nombre: "rosa", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59CB6_0S9VZssN6dPeeqxI2iP5ZX7Xxp0wg&usqp=CAU" })
//     .then((dato) => {
//         console.log("La foto ha sido eliminada correctamente");
//         console.log(dato);
  
//     })
//     .catch((err) => {
//         console.log(err);
//     })


////DADO UN USUARIO ELIMINAR TODAS SUS FOTOS
// Fotos.deleteMany({ nombre: "rosa"})
//     .then((dato) => {
//         console.log("Se han sido eliminado todas las fotos");
//         console.log(dato);
  
//     })
//     .catch((err) => {
//         console.log(err);
//     })