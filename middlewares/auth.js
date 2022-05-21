'use strict'

const jwt = require("jsonwebtoken");
const { secretjwt } = require('../config/config.js');

module.exports.validateToken = (token)=>{
    if (!token){
       res.status(400).json({
           menssage:"Token is required"
       });
    }
    jwt.verify(token, secretjwt, (err, decoded) => {
        if (err){
            res.status(400).json({
                menssage:"Token Invalid"
            });
        }
        next();
    });
}

module.exports.generateToken = (req,res)=>{
    const user = req.body.user;
    const token = jwt.sign(user,secretjwt, { expiresIn: '1h' }, (err, token) => {
        if (err){
            res.status(400).json({
                menssage:"Could not generate token"
            })
        }
        res.status(200).json({
            token
        });
    })
}
