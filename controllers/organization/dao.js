const db = require("../../models")

module.exports ={
    async getAllDAO(){
        return db.Organization.findAll({attributes:[name,image,phone,address]})
    }
}