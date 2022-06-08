const News = require("../../models/News.js");
const User = require("../../models/user.js");
const db = require("../../models");

const getNewsById = async(id) => {
    const news = await db.News.findByPk(id, { attributes: { exclude: ['deletedAt'] } })
    return news;
};

const getUsersById = async(id) => {
    const user = await db.User.findByPk(id, {
        attributes: {
            exclude: ['password']
        }
    })
    return user;
};

module.exports = {
    getUsersById,
    getNewsById,
};