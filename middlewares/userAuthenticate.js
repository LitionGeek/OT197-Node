const validateUserAuth = (req,res,next)=>{
    const id = req.params.id;
    if(req.user.id !== id || req.user.roleId !== 1){
        return res.status(403).json({
            message:'Forbidden'
        })
    }
    next();
}