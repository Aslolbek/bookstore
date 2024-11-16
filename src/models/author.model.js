const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database/sequelize");

class Author extends Model {}

Author.init(
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
    firstname:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataofbirth:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataofdeath:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    country:{
      type: DataTypes.STRING,
      allowNull: false,

    },
    bio:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    filname:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "authors",
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Author;
