const express = require("express")
require("dotenv").config()
const cors = require("cors")
const path = require("path")
const sequelize = require("./database/sequelize");

const router = require("./routers")
const file = require("express-fileupload")
const Relations = require("./models/association");


const cookie = require("cookie-parser")


    
    
    
    const  app = express()
    


app.use(express.json())
app.use(cors({
    origin:'*',
}))
app.use(cookie())
app.use(express.urlencoded({extended: true}));
app.use(file())

app.use(express.static(process.cwd() + "/src/public"));
app.use(express.static(process.cwd() + "/uploads"));
Relations();

const bootstrap = async (req, res) => {
    await sequelize.authenticate({
      logging: false,
    });
  
    await sequelize.sync({
      alter: true,
      logging: false,
    });
app.use(router)


const PORT =process.env.PORT


app.listen(PORT, ()=>{
    console.log(`PORT:${PORT}`);
})


};

bootstrap();
