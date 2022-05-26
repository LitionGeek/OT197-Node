const express = require('express');
const router = express.Router();
const { createMember, deleteMember, getAllMembers, editMember } = require('../controllers/members/members.js');
const {validateToken,generateToken}= require('../middlewares/auth');
const { validateNameMember } = require('../middlewares/validationsMembers.js');


router.get("/",getAllMembers);
router.post("/",[validateNameMember/*,validateToken*/],createMember);
router.delete("/:id",/*validateToken,*/deleteMember);
router.put("/:id",editMember);
module.exports = router;