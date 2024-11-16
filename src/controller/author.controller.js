
const jwt = require("../libs/jwt")
const path=require("path")
const Author  =require("../models/author.model")

const addAuthor = async (req, res)=>{

    try {
        
        const {firstname ,
            lastname ,
            dataofbirth ,
            dataofdeath ,
            country ,
            bio } = req.body

        const {file} = req.files

        const fileName = `${file.name}`;

        file.mv(process.cwd() + "/uploads/" + fileName);
        const {token} = req.cookies
        const user_id = await jwt.verify(token)
        await Author.create({
            user_id: user_id,
            firstname: firstname,
            lastname: lastname,
            dataofbirth: dataofbirth,
            dataofdeath: dataofdeath,
            country: country,
            bio: bio,
            filname: fileName,
          });

        res.status(201).json("yuklandi")


    } catch (error) {
        res.status(403).json({message:`${error.message}`})
        
    }
}

module.exports={
    addAuthor
}