const { body } = require('express-validator')

const validations = [
    body('email').notEmpty().withMessage('Email is required').bail().isEmail().withMessage('email invalid'),
    body('password').notEmpty().withMessage('Password is required').isLength({min: 8}).withMessage("Password must be between 8-100 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage("Password must include one lowercase character, one uppercase character, a number, and a special character.")
]

module.exports = validations