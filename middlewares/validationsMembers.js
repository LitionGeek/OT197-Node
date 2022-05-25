module.exports = {
    validateNameMember(req,res,next){
        if (!req.body.name && typeof req.body.name !== 'string') {
            return res.status(400).json({
                ok: false,
                message: "Name is required or type invalid!"
            })
        }
        next();
    }
}