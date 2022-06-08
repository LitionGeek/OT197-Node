var express = require('express');
const router = express.Router();

const commentsController = require('../controllers/comments/comments.js');
const { validateComments, isOwnCommentOrAdmin, newsAndUserExisting } = require('../middlewares/commentsValidation');
const isAdmin = require('../middlewares/adminMiddleware');
const { validateToken } = require('../middlewares/auth');

router.post('/', validateToken, validateComments, commentsController.create);
router.get('/', validateToken, isAdmin, commentsController.getAll);
router.get('/:id', validateToken, isAdmin, commentsController.getById);
router.put('/:id', validateToken, isOwnCommentOrAdmin, validateComments, commentsController.update);
router.delete('/:id', validateToken, isOwnCommentOrAdmin, commentsController.remove);

module.exports = router;