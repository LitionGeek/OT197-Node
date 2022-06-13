var express = require('express');
const router = express.Router();

const commentsController = require('../controllers/comments/comments.js');
const { validateToken } = require('../middlewares/auth');

router.get('/:id/comments', validateToken, commentsController.getCommentsByNewsId);

module.exports = router;