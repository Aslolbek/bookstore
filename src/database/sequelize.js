const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("postgres://postgres:11@localhost:5432/devbooks");

module.exports = sequelize;
