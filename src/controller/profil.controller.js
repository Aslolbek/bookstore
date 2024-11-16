
const {hesh, compare}= require("../libs/bcrypt")
const {sign , verify}= require("../libs/jwt")
const Users = require("../models/users.model")

const Myprofil = async (req, res)=>{
    try {
        const {firstname, lastname, phone, email} = req.body
        const {token} = req.cookies
        const verifytoken_userId = await verify(token)
        
        const checkemail =  await Users.findOne({
            where: { email: email },
          });

        if(checkemail){
            if (checkemail.id==verifytoken_userId) {
                await Users.update(
                    {
                      firstname: firstname,
                      lastname: lastname,
                      phone: phone,
                      email: email,
                    },
                    {
                      where: { id: verifytoken_userId },
                      returning: true, // Yangilangan qatorni qaytarish
                    }
                  );
                 res.status(200).json("profil ma'lumotlari o`zgarishlar saqlandi!") 
            }else{
                res.status(403).json("Bunday email bilan o'zgartirish kiritib bolmaydi boshqa foydalanuvchi bu email bilan ro'yxatdan o'tgan!")
            }
            
        }else{
            await Users.update(
                {
                  firstname: firstname,
                  lastname: lastname,
                  phone: phone,
                  email: email,
                },
                {
                  where: { id: verifytoken_userId },
                }
              );
            res.status(200).json("profil ma'lumotlari o`zgarishlar saqlandi!")
        }
        
        
        
    } catch (error) {
        res.status(403).json({message:`${error.message}`})
        
    }

}
const recoverPassword = async (req, res)=>{

    try {
        const {email, currentpassword, newpassword, confirmpassword}= req.body
       
            const user =  await Users.findOne({
            where: { email: email },
          });

            console.log(user);

            if(user){
                const check = await compare(currentpassword, user.password)
                if(check){
                    const password = await hesh(newpassword)
                    await Users.update(
                        {
                          password: password,
                        },
                        {
                          where: { email: email },
                        }
                      );
            res.send("Parol muvofaqqiyatlik o'zgartirildi") 
                }else{
                        res.status(400).json("Siz oldingi parolingizni hatolik! Tekshirib ko'ring!")
                }
               
            }else{
                res.status(400).json("Sizda emailda hatolik mavjud")
            }
            
        
        


    } catch (error) {
        res.status(403).json({message:`${error.message}`})
        
    }

}


module.exports={
    Myprofil,
    recoverPassword
}