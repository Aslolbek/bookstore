const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database/sequelize");

class Passport extends Model {}

Passport.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    seria: {
      type: DataTypes.STRING(9),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "passport",
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableName: true,
  }
);

module.exports = Passport;
