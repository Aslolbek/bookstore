const {Router} = require("express")
const isAuth = require("../middlewares/isAuth")
const { addAuthor } = require("../controller/author.controller")

const router = Router()

router.post("/Author/add", isAuth, addAuthor)




module.exports = router