const Book = require("../models/book.model")
const Author = require("../models/author.model")

const searchAuthor = async (req, res )=>{
    try {
        
        const {firstname} = req.body
        
        const author = await Author.findAll({
            where: 
                { firstname: firstname }, 
                           
          });

        console.log(author);

        if(author?.length){
            res.status(201).json(author)
        }else{
            res.status(403).json({message:`Natija mavjud emas`})
        }
    } catch (error) {
        res.status(403).json({message:`${error.message}`})
    }
}

const searchBook = async (req, res )=>{
    try {
        
        const {title} = req.body
        
        const book = await Book.findOne({
            where: { title: title },
          });

        if(book){
            res.status(201).json(book)
        }else{
            res.status(403).json({message:`Natija mavjud emas`})
        }
    } catch (error) {
        res.status(403).json({message:`${error.message}`})
    }
}


module.exports={
    searchAuthor,
    searchBook
}