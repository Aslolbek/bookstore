const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database/sequelize");

class Users extends Model {}

Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
          },
        firstname:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        lastname:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        phone:{
            type:DataTypes.STRING,
            allowNull:false,

        },
        email : {
            type:DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    },
    {
        sequelize,
        tableName: "users",
        createdAt: "created_at",
        updatedAt: "updated_at",
        freezeTableName: true,
      }
);



module.exports= Users
