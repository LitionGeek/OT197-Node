var express = require('express');
var router = express.Router();

const regValidations = require('../middlewares/regValidations')
const loginValidations = require('../middlewares/loginValidations')
const usersController = require  ('../controllers/users/usersController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/users', usersController.usuarioList);

/* POST user create. */

router.post('/auth/register',regValidations ,usersController.create)
router.post('/auth/login',loginValidations,usersController.login)

/* PATCH user create. */
router.patch('/:id',usersController.update)


/* DELETE user delete. */
router.delete('/:id', usersController.delete);
module.exports = router;
