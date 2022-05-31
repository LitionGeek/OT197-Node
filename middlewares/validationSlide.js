module.exports = {
    validationBody(req,res,next){
        if(!req.body.image || !req.body.organizationId || !req.body.text) return res.status(400).json({
            message:"Image, text and organizationId are required" 
        })
        next();
    }
}