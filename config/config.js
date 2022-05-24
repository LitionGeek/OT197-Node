require('dotenv').config()

module.exports = {
    "development": {
        "username": process.env.DB_USER || "LitionGeek",
        "password": process.env.DB_PASSWORD || "mason123",
        "database":  process.env.DB_NAME || "members",
        "host": process.env.DB_HOST || "localhost",
        "port": process.env.DB_PORT || "3306",
        "dialect": "mysql"
    },
    "test": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "mysql"
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "mysql"
    }
}