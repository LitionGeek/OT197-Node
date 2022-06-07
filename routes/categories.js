var express = require('express');
const router = express.Router();

const categoriesController = require('../controllers/categories/categories.js');
const { createValidationCategory, updateValidationCategory } = require('../middlewares/categories-validation');
const isAdmin = require('../middlewares/adminMiddleware');
const { validateToken } = require('../middlewares/auth');

router.post('/', validateToken, isAdmin, createValidationCategory, categoriesController.create);
router.get('/', validateToken, isAdmin, categoriesController.getAll);
router.get('/:id', validateToken, isAdmin, categoriesController.getById);
router.put('/:id', validateToken, isAdmin, updateValidationCategory, categoriesController.update);
router.delete('/:id', validateToken, isAdmin, categoriesController.remove);

module.exports = router;