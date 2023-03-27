let mongoose = require("mongoose");
let Teacher = require("./esquemaTeacher");
let Marks = require("./esquemaMarks");

mongoose.connect('mongodb+srv://julioperez:Puertollano1@cluster0.skczjsh.mongodb.net/Teachers',
    { useNewUrlParser: false, useUnifiedTopology: false })


let teacher1 = new Teacher({ teacher_first_name: "Luis", teacher_last_name: "Santos" });
let teacher2 = new Teacher({ teacher_first_name: "Sara", teacher_last_name: "Espinosa" });
let teacher3 = new Teacher({ teacher_first_name: "Jose", teacher_last_name: "Naranjo" });
let teacher4 = new Teacher({ teacher_first_name: "Natalia", teacher_last_name: "Sanchez" });
let teacher5 = new Teacher({ teacher_first_name: "Pedro", teacher_last_name: "Gomez" });
let teacher6 = new Teacher({ teacher_first_name: "Ana", teacher_last_name: "Obrero" });
let teacher7 = new Teacher({ teacher_first_name: "Juan", teacher_last_name: "Perez" });
let teacher8 = new Teacher({ teacher_first_name: "Bea", teacher_last_name: "Ortuño" });
let teacher9 = new Teacher({ teacher_first_name: "Jorge", teacher_last_name: "Rodriguez" });
let teacher10 = new Teacher({ teacher_first_name: "Laura", teacher_last_name: "Lopez" });


let mark1 = new Marks({ date: new Date(2022, 02, 15), mark: 6, student_first_name: "Carlos", student_last_name: "Gomez", group_name: "b", subject_name: "Matematicas", teachers: [teacher1, teacher2] });
let mark2 = new Marks({ date: new Date(2022, 04, 25), mark: 8, student_first_name: "Blanca", student_last_name: "Perez", group_name: "a", subject_name: "Lengua", teachers: [teacher3, teacher4] });
let mark3 = new Marks({ date: new Date(2022, 10, 11), mark: 5, student_first_name: "Sergio", student_last_name: "Sanchez", group_name: "c", subject_name: "Fisica", teachers: [teacher2, teacher8] });
let mark4 = new Marks({ date: new Date(2022, 06, 02), mark: 7, student_first_name: "Susana", student_last_name: "Obrero", group_name: "b", subject_name: "Musica", teachers: [teacher5] });
let mark5 = new Marks({ date: new Date(2023, 02, 12), mark: 9, student_first_name: "Roberto", student_last_name: "Pozo", group_name: "d", subject_name: "Matematicas", teachers: [teacher7, teacher10] });
let mark6 = new Marks({ date: new Date(2023, 03, 04), mark: 6, student_first_name: "Fernando", student_last_name: "Cano", group_name: "a", subject_name: "Geografia", teachers: [teacher5] });
let mark7 = new Marks({ date: new Date(2022, 11, 06), mark: 4, student_first_name: "Maria", student_last_name: "Vargas", group_name: "c", subject_name: "Ingles", teachers: [teacher4, teacher8] });
let mark8 = new Marks({ date: new Date(2022, 08, 18), mark: 10, student_first_name: "Marta", student_last_name: "Mohedano", group_name: "d", subject_name: "Lengua", teachers: [teacher7] });
let mark9 = new Marks({ date: new Date(2023, 01, 05), mark: 7, student_first_name: "Rafa", student_last_name: "Santos", group_name: "b", subject_name: "Musica", teachers: [teacher1, teacher6] });
let mark10 = new Marks({ date: new Date(2022, 12, 22), mark: 5, student_first_name: "Carla", student_last_name: "Marquez", group_name: "a", subject_name: "fisica", teachers: [teacher10, teacher9] });

// Teacher.insertMany([teacher1, teacher2, teacher3, teacher4, teacher5, teacher6, teacher7, teacher8, teacher9, teacher10])
//     .then((data) => {
//         console.log(data);
//         console.log("Profesores añadidos correctamente");
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// Marks.insertMany([mark1, mark2, mark3, mark4, mark5, mark6, mark7, mark8, mark9, mark10])
//     .then((data) => {
//         console.log(data);
//         console.log("Notas añadidas correctamente");
//     })
//     .catch((err) => {
//         console.error(err);
//     });


////Calcular la nota media de los alumnos de una asignatura concreta.
Marks.aggregate([
    { $match: { subject_name: "matematicas" } },
    { $group: { "_id": null, media: { "$avg": "$mark" } } }])
    .then((result) => {
        console.log(result[0].media);
    })
    .catch((error) => {
        console.log(error);
    });


////Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos.
Marks.aggregate([
    { $group: { _id: null, sumar: { $sum: 1 } } }
  ])
  .then((result) => {
    console.log("Número total de alumnos: " + result[0].sumar);
  })
  .catch((err) => {
    console.log(err);
  });

  ////Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos.
  