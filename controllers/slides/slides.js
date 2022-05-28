const uploadFile = require('../../helpers/S3');
const { createSlides } = require('./dao');

module.exports = {
    async uploadImage(req, res) {
        const {image,text,order,organizationId} = req.body;
        const extension = image.substring("data:image/".length, image.indexOf(";base64"));
        let slide;
        try {
            const {Location : imageUrl } = await uploadFile(image, extension)
            slide = {
                imageUrl,
                text,
                order:parseInt(order),
                organizationId:parseInt(organizationId)
            }
        } catch (error) {
            return res.status(400).json({
                message:'Image could not be uploaded'
            });
        }
        await createSlides(slide).then(data=>{
            return res.status(201).json({
                message:'Slide created'
            });
        }).catch(err=>{
            return res.status(400).json({
                message:'Could not create slide'
            });
        })
    }
}
