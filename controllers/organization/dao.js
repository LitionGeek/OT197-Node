const db = require("../../models")

module.exports ={
    async getAllDAO(){
        return db.Organization.findAll({attributes:[name,image,phone,address]})
    },
    async getAllDAOWithSlides(){
        return db.Organization.findAll({attributes:[name,image,phone,address],include:[db.Slides],order:['order','DESC']})
    }
}