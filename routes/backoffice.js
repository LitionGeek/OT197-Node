var express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts/contacts.js');
const isAdmin = require('../middlewares/adminMiddleware')
const { validateToken } = require('../middlewares/auth');


router.get('/contacts', validateToken, isAdmin, contactsController.getAll);

module.exports = router;