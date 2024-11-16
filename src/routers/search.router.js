const {Router} = require("express")
const isAuth = require("../middlewares/isAuth")
const { searchAuthor, searchBook } = require("../controller/search.controller")

const  router = Router()

router.post("/search/Author", isAuth, searchAuthor)
router.post("/search/book", isAuth, searchBook)


module.exports=router