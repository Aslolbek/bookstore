// BelongsTo
// HasOne
// HasMany
// BelongsToMany

const AuthorBooks = require("./author-books.model");
const Author = require("./author.model");
const Book = require("./book.model");
const Category = require("./category.model");
const Passport = require("./passport.model");

const Relations = () => {
  Passport.hasOne(Author, {foreignKey: "passport_id"});
  Author.belongsTo(Passport, {foreignKey: "passport_id"});

  Category.hasMany(Book, {foreignKey: "category_id"});
  Book.belongsTo(Category, {foreignKey: "category_id"});

  Author.belongsToMany(Book, {through: AuthorBooks});
  Book.belongsToMany(Author, {through: AuthorBooks});
};

module.exports = Relations;
