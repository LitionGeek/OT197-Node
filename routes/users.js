var express = require('express');
var router = express.Router();

const regValidations = require('../middlewares/regValidations')
const usersController = require  ('../controllers/users/usersController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST user create. */
router.post('/auth/register',regValidations ,usersController.create)


/* DELETE user delete. */
router.delete('/:id', usersController.delete);
module.exports = router;
