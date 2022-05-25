module.exports = {
    validateMemberID = (req,res,next){
        if(!req.params.id){
            return res.status(400).json({
                message: "Member not exist"
            })
        }
        next();
    },
    validateNameMember = (req,res,next){
        if (!req.body.name && typeof req.body.name !== 'string') {
            return res.status(400).json({
                ok: false,
                menssage: "Name is required or type invalid!"
            })
        }
        next();
    }
}