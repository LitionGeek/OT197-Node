const { body } = require('express-validator')
const { executeValidation } = require('./validation-index')

const name = body('name')
    .exists().withMessage('Name parameter is required').bail()
    .isString().withMessage('Name has to be a string').bail()
    .isLength({ min: 1, max: 200 }).withMessage('must have content').bail()

const phone = body('phone')
    .optional()
    .isMobilePhone('any').withMessage('Insert a valid phone')

const email = body('email')
    .exists().withMessage('Email is required').bail()
    .isEmail().withMessage('Email must have valid format').bail()
    .isLength({ max: 255 }).withMessage('Email max lenght 255').normalizeEmail();

const message = body('message')
    .isString().withMessage('Message has to be a string')
    .isLength({ min: 4, max: 200 }).withMessage('Message field must have min 4 and max 200 characters')


const contactValidation = [name, phone, email, message, executeValidation]

module.exports = { contactValidation }