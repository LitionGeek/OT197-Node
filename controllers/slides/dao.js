const db = require("../../models");

module.exports = {
    async createSlides(slide){
        return await db.Slides.create(slide);
    },
}