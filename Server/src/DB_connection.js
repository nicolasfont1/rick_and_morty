const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
console.log(DB_HOST)

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, { logging: false, native: false })

const UserModel = require("./Models/User");
const FavoriteModel = require("./Models/Favorite");

UserModel(database);
FavoriteModel(database);
const { User, Favorite } = database.models;

User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
    User,
    Favorite,
    database
}