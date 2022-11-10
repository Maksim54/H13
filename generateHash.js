const bcrypt = require('bcrypt');
const myPassword = "Maksim Lagunovski";

console.time('Time to generate salt')
const salt = bcrypt.genSaltSync(10)
console.log("This is ur salt: "+salt)
console.timeEnd("Time to generate salt")

console.time('Time to generate hash')
const hashedPassword = bcrypt.genSaltSync(10)
console.log(myPassword + " is your password and this is ur hashed" +
    "password: " + hashedPassword)
console.timeEnd("Time to generate hash")