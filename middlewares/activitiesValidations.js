const { body } = require('express-validator')

const validations = [
    body('name').notEmpty().withMessage('Name is required'),
    body('content').notEmpty().withMessage('Content is required')
]

module.exports = validations