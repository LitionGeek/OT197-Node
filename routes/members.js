const express = require('express');
const router = express.Router();
const { createMember } = require('../controllers/members/members.js');
const {validateToken,generateToken}= require('../middlewares/auth');

router.post("/",validateToken,createMember);
router.get("/",generateToken,(req,res)=>{
    res.json({ok:"ok"})
});

module.exports = router;