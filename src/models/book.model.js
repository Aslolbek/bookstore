const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database/sequelize");

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_id:{
      type: DataTypes.INTEGER,
    },
    title:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    pages:{
      type:DataTypes.STRING,
            allowNull:false,
    },
    year:{
      type:DataTypes.STRING,
            allowNull:false,
    },
    price:{
      type:DataTypes.STRING,
            allowNull:false,
    },
    country:{
      type:DataTypes.STRING,
            allowNull:false,
    },
    author:{
      type:DataTypes.STRING,
            allowNull:false,
    },
    description:{
      type:DataTypes.STRING,
            allowNull:false,
    },
    filname:{
      type:DataTypes.STRING,
            allowNull:false,
    },
  },
  {
    sequelize,
    tableName: "books",
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableName: true,
  }
);

module.exports = Book;
