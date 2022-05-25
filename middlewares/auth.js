'use strict'

const jwt = require("jsonwebtoken");
require('dotenv').config();

module.exports.validateToken = (req,res,next)=>{
    const token = req.headers["authorization"];
    if (!token){
       return res.status(401).json({
           message:"Access denied"
       });
    }
    try {
        const verified = jwt.verify(token, process.env.secretJWT);
        req.idUser = verified.id;
        next();
    } catch (error) {
        res.status(400).json({
            message:"Token invalid"
        })
    }
}

module.exports.generateToken = (req,res)=>{
    const token = jwt.sign({id:req.body.id},process.env.secretJWT, { expiresIn: '1h' });
    return res.status(200).json({
        token
    });
}
