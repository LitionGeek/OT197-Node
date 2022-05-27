var express = require('express');
const router = express.Router();

const categoriesController = require('../controllers/categories/categories.js');
const { createValidationCategory, updateValidationCategory } = require('../middlewares/categories-validation');

router.post('/', /*"is admin?" middleware missing,*/ createValidationCategory, categoriesController.create);
router.get('/', /*"is admin?" middleware missing,*/ categoriesController.getAll);
router.get('/:id', /*"is admin?" middleware missing,*/ categoriesController.getById);
router.put('/:id', /*"is admin?" middleware missing,*/ updateValidationCategory, categoriesController.update);
router.delete('/:id', /*"is admin?" middleware missing,*/ categoriesController.remove);

module.exports = router;