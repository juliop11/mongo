let mongoose = require("mongoose");
let User = require("./userSchema");
let Profile = require("./profileSchema");
let Creedentials = require("./creedentialsSchema");

mongoose.connect('mongodb+srv://julioperez:Puertollano1@cluster0.skczjsh.mongodb.net/test',
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
    dateOfBirth: 1990 - 05 - 12,
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


