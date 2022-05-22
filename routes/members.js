const express = require('express');
const router = express.Router();
const { createMember, getMember, deleteMember } = require('../controllers/members/members.js');
const {validateToken,generateToken}= require('../middlewares/auth');

router.post("/",validateToken,createMember);
router.delete("/:id",validateToken,deleteMember);

router.get("/",generateToken,(req,res)=>{
    res.json({ok:"ok"})
});

module.exports = router;