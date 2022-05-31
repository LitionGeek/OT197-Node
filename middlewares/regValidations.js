const { body } = require('express-validator');

const regValidations = [
    body('firstName').notEmpty().withMessage('First Name is required.').isLength({min: 2}).withMessage("Password must be between 2-200 characters long"),
    body('lastName').notEmpty().withMessage('Last Name is required.').isLength({min: 2}).withMessage("Password must be between 2-200 characters long"),
    body('email').notEmpty().withMessage('Email is required').bail().isEmail().withMessage('Invalid email'),
    body('password').notEmpty().withMessage('Password is required').isLength({min: 8}).withMessage("Password must be between 8-100 characters long").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage("Password must include one lowercase character, one uppercase character, a number, and a special character."),
]
module.exports = regValidations