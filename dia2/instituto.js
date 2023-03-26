let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://julioperez:Puertollano1@cluster0.skczjsh.mongodb.net/Instituto',
    { useNewUrlParser: false, useUnifiedTopology: false })

let teachersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [String],
});

let subjectsSchema = new mongoose.Schema({
    title: String,
    teachers: [teachersSchema]
});

let marksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    subjects: subjectsSchema
});

let studentsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    marks: [marksSchema]
});

let Teachers = mongoose.model("Teachers", teachersSchema);
let Subjects = mongoose.model("Subjects", subjectsSchema);
let Marks = mongoose.model("Marks", marksSchema);
let Students = mongoose.model("Students", studentsSchema);

let teacher1 = new Teachers({
    firstName: "Sara",
    lastName: "Santos",
    groups: ["a", "b"]
})
let teacher2 = new Teachers({
    firstName: "Carlos",
    lastName: "Villar",
    groups: ["c", "a"]
})
let teacher3 = new Teachers({
    firstName: "Laura",
    lastName: "Delgado",
    groups: ["c", "d"]
})
let teacher4 = new Teachers({
    firstName: "Antonio",
    lastName: "Heredia",
    groups: ["b", "d"]
})

let subject1 = new Subjects({ title: "Inglés", teachers: [teacher1] })
let subject2 = new Subjects({ title: "Lenguaje", teachers: [teacher2, teacher4] })
let subject3 = new Subjects({ title: "Musica", teachers: [teacher3] })
let subject4 = new Subjects({ title: "Matemáticas", teachers: [teacher1, teacher4] })


let mark1 = new Marks({ date: "2023-11-05", mark: 5, subjects: subject1 })
let mark2 = new Marks({ date: "2022-05-05", mark: 6, subjects: subject2 })
let mark3 = new Marks({ date: "2023-02-25", mark: 8, subjects: subject3 })
let mark4 = new Marks({ date: "2022-06-16", mark: 9, subjects: subject4 })


let student1 = new Students({ firstName: "Samara", lastName: "Sanchez", marks: [mark1, mark2] })
let student2 = new Students({ firstName: "Borja", lastName: "Naranjo", marks: [mark3, mark1] })
let student3 = new Students({ firstName: "Carmen", lastName: "Pozo", marks: [mark3, mark4] })
let student4 = new Students({ firstName: "Juan", lastName: "Gomez", marks: [mark1, mark4] })




// Teachers.insertMany([teacher1, teacher2, teacher3, teacher4])
//     .then((data) => {
//         console.log(data);
//         console.log("Profesores añadidos correctamente");
//     })
//     .catch((err) =>{
//         console.error(err);
//     });


// Subjects.insertMany([subject1, subject2, subject3, subject4])
//     .then((data) => {
//         console.log(data);
//         console.log("Asignaturas añadidas correctamente");
//     })
//     .catch((err) =>{
//         console.error(err);
//     });


// Marks.insertMany([mark1, mark2, mark3, mark4])
//     .then((data) => {
//         console.log(data);
//         console.log("Notas añadidas correctamente");
//     })
//     .catch((err) =>{
//         console.error(err);
//     });


// Students.insertMany([student1, student2, student3, student4])
//     .then((data) => {
//         console.log(data);
//         console.log("Estudiantes añadidos correctamente");
//     })
//     .catch((err) =>{
//         console.error(err);
//     });

////TODAS LAS NOTAS DE UN ALUMNO
Students.findOne({ firstName: 'Samara' })
    .then((students) => {
        console.log("ESTAS SON LAS NOTAS DE SAMARA:");
        students.marks.forEach(mark => {
            console.log(mark.mark);
        });
    })
    .catch((err) => {
        console.error(err);
    });

////TODAS LAS ASIGNATURAS DE UN ALUMNO
Students.findOne({ firstName: 'Samara' })
    .then((students) => {
        console.log("ESTAS SON LAS ASIGNATURAS DE SAMARA:");
        students.marks.forEach(mark => {
            console.log(mark.subjects.title);
        });
    })
    .catch((err) => {
        console.error(err);
    });

////TODOS LOS PROFESORES DE UN ALUMNO
Students.findOne({ firstName: 'Samara' })
    .then((students) => {
        console.log("ESTOS SON LOS PROFESORES DE SAMARA:");
        students.marks.forEach(mark => {
            mark.subjects.teachers.forEach(teachers => {
                console.log(teachers.firstName);
            })
        });
    })
    .catch((err) => {
        console.error(err);
    });