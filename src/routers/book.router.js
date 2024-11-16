const {Router} = require("express")
const { addBook } = require("../controller/book.controller")
const isAuth = require("../middlewares/isAuth")

const router = Router()

router.post("/book/add", isAuth, addBook)




module.exports = router