var express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts/contacts.js');
const { contactValidation } = require('../middlewares/contactsValidations');
const isAdmin = require('../middlewares/adminMiddleware')
const { validateToken } = require('../middlewares/auth');

router.post('/', validateToken, contactValidation, contactsController.create);
router.get('/', validateToken, isAdmin, contactsController.getAll);


module.exports = router;