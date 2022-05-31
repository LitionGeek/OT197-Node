var express = require('express');
var router = express.Router();

const regValidations = require('../middlewares/regValidations')
const loginValidations = require('../middlewares/loginValidations')
const isAdmin = require('../middlewares/adminMiddleware')
const usersController = require  ('../controllers/users/usersController');
const authController = require('../controllers/auth/authController');
const { validateToken} = require('../middlewares/auth');



router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/users',usersController.usuarioList);

/* GET user auth/me */
router.get('/auth/me',authController.me);

/* POST user create. */
router.post('/auth/register',validateToken,isAdmin,regValidations,usersController.create)

/* POST user login. */
router.post('/auth/login',loginValidations,authController.login)

/* PATCH user update. */
router.patch('/:id',validateToken,isAdmin,usersController.update)

/* DELETE user delete. */
router.delete('/:id',validateToken,isAdmin, usersController.delete);

module.exports = router;
