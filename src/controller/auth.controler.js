
const {hesh, compare} = require("../libs/bcrypt")
const {sign, verify}= require("../libs/jwt")
const Users = require("../models/users.model")

const SignUp =async (req, res )=>{

    const {firstname, lastname, phone, email, password1}= req.body

    const chekemail = await Users.findOne({
        where: { email: email },
        attributes: ['email'], // O'qishni xohlagan ustunlarni belgilash
      });
    if(chekemail){
        res.status(400).json("Bu Email bilan ro'yxatdan o'tilgan")
    }else{
      const password =await hesh(password1)

      await Users.create({firstname, lastname,phone, email, password,});

    res.status(201).json("Succes") 
    }
    
}

const SignIn = async (req, res)=>{

    try {
        
        const {email, pass} = req.body

        const user = await Users.findOne({
            where: { email: email },
          });
        
        if(!user){
            
            res.status(403).json("email topilmadi")
            
        }else {
            
            const check = await compare(pass, user.password)
            if(check){
                const token = await sign(user.id)
                res.cookie("token",token)
                res.status(201).json({message:"Tizmmiga kirdingiz", data:`${token}`})
            }else{
                res.status(201).json("parol xato")
            }
            
        }
    } catch (error) {
        res.status(403).json({message:`${error.message}`})
        
    }
    }
    
    
    module.exports={
        SignUp,
        SignIn
}
