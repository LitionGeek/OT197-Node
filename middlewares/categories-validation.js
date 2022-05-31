const { body, param } = require('express-validator')
const { executeValidation } = require('./validation-index')

const isStringOrNull = value => {
    if (typeof value !== 'string' && value !== null) throw new Error('Has to be a string or null')
    if (value !== null && value.length <= 0) throw new Error('Must have content')

    return true
}

exports.createValidationCategory = [
    body('name')
    .exists().withMessage('Name is required').bail()
    .isString().withMessage('Name has to be a string').bail()
    .isLength({ min: 1, max: 200 }).withMessage('Must have content').bail(),
    body('description')
    .optional()
    .isString().withMessage('Description has to be a string').bail()
    .isLength({ min: 1, max: 200 }).withMessage('Must have content').bail(),
    body('image')
    .optional()
    .isString().withMessage('Image has to be a string').bail()
    .isLength({ min: 1, max: 200 }).withMessage('Must have content').bail(), executeValidation
]

exports.updateValidationCategory = [
    param('id')
    .isInt().withMessage('id has to be a number').bail(),
    body('name')
    .exists().withMessage('Name is required').bail()
    .isString().withMessage('Name has to be a string').bail()
    .isLength({ min: 1, max: 200 }).withMessage('Must have content').bail(),
    body('description')
    .custom(isStringOrNull),
    body('image')
    .if((value, { req }) => !req.file)
    .isString().withMessage('must be a string').bail()
    .isLength({ min: 1, max: 200 }).withMessage('Must have content').bail(),
    executeValidation
]