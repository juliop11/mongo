let mongoose = require("mongoose");
let User = require("./esquemaUser");
let Profile = require("./esquemaProfile");
let Creedentials = require("./esquemaCreedentials");

mongoose.connect('mongodb+srv://julioperez:Puertollano1@cluster0.skczjsh.mongodb.net/codenotch',
    { useNewUrlParser: false, useUnifiedTopology: false })

let userDocument = new User({
    login: "carlos@gmail.com",
    password: 123456
});

userDocument.save()
.then ((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})



let profileDocument = new Profile({
    name: "carlos",
    surname: "lopez",
    dateOfBirth: new Date(1940, 05, 12),
    comments: "Hola que tal",
    rol: "trabajador"
});

profileDocument.save()
.then ((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})

profileDocument = new Profile({
    name: "carlos",
    surname: "lopez",
    dateOfBirth: new Date(1992, 05, 12),
    comments: "Hola que tal",
    rol: "trabajador"
});

profileDocument.save()
.then ((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})


profileDocument = new Profile({
    name: "JUanita",
    surname: "lopez",
    dateOfBirth: new Date(1992, 05, 12),
    comments: "Hola que tal",
    // rol: "trabajador"
});

profileDocument.save()
.then ((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})


let creedentialsDocument = new Creedentials({
    address: "calle ancha 22",
    phone: 698745321,
    email: "carlos@gmail.com"
});

creedentialsDocument.save()
.then ((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})


