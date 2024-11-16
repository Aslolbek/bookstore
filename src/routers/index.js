const auth =require("./auth.router")
const profil = require("./profil.router")
const book = require("./book.router")
const author= require("./author.router")
const search = require("./search.router")


module.exports=[auth, profil, book, author, search]