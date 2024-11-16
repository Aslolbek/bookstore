
const {sign, verify}= require("../libs/jwt")
const path=require("path")
const  Book  = require("../models/book.model")

const addBook = async (req, res)=>{

    try {
        
        const {title, pages, year, price, country, author, description} = req.body

        const {file} = req.files

        const fileName = `${file.name}`;

        
        file.mv(process.cwd() + "/uploads/" + fileName);

        const {token} = req.cookies
        const user_id = await verify(token)

        await Book.create({
      user_id: user_id,
      title: title,
      pages: pages,
      year: year,
      price: price,
      country: country,
      author: author,
      description: description,
      filname: fileName,
    });

        res.status(201).json("Kitob yuklandi")


    } catch (error) {
        res.status(403).json({message:`${error.message}`})
        
    }
}

module.exports={
    addBook
}