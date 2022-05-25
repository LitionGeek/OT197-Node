const express = require('express');
const router = express.Router();
const { createMember, deleteMember, getAllMembers } = require('../controllers/members/members.js');
const {validateToken,generateToken}= require('../middlewares/auth');
const { validateNameMember } = require('../middlewares/validationsMembers.js');


router.get("/",getAllMembers);
router.post("/",[validateNameMember,validateToken],createMember);
router.delete("/:id",validateToken,deleteMember);

module.exports = router;