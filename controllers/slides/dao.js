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
    async getFinalListDAO(){
        return await db.Slides.findOne({order:[['createdAt','DESC']],attributes:["order"],where:{order:{[Op.not]: 0||null}}});
    },
    async getOneSlideDAO(id){
        return await db.Slides.findOne({where:{id:id}})
    },
    async editSlideDAO(slideUpdate,id){
        return await db.Slides.update(slideUpdate,{where:{id:id}});
    },
    async deleteSlideDAO(id){
        return await db.Slides.destroy({where:{id:id}})
    }
}