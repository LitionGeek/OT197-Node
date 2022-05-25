const express = require('express');
const router = express.Router();
const { createMember, getMember, deleteMember, getAllMembers } = require('../controllers/members/members.js');
const {validateToken,generateToken}= require('../middlewares/auth');
const { validateNameMember, validateMemberID } = require('../middlewares/validationsMembers.js');


router.get("/token",generateToken);
router.get("/",getAllMembers);
router.post("/",[validateNameMember,validateToken],createMember);
router.delete("/:id",[validateMemberID,validateToken],deleteMember);

router.get("/",generateToken,(req,res)=>{
    res.json({ok:"ok"})
});

module.exports = router;