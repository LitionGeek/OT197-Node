const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    async createSlidesDAO(slide){
        return await db.Slides.create(slide);
    },
    async getSlidesDAO(){
        return await db.Slides.findAll({attributes:['order','imageUrl']});
    },
    async getFinalList(){
        return await db.Slides.findOne({order:[['createdAt','DESC']],attributes:["order"],where:{order:{[Op.not]: 0}}});
    },
    async getOneSlide(id){
        return await db.Slides.findOne({where:{id:id}})
    }
}