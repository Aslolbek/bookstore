const {Router}=require("express")
const isAuth = require("../middlewares/isAuth")
const { Myprofil, recoverPassword } = require("../controller/profil.controller")
const router = Router()

router.put("/profil", isAuth, Myprofil)
router.put("/password", isAuth, recoverPassword)



module.exports=router