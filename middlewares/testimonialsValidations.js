let { check, body } = require('express-validator');
const db = require('../models');


const createTestimonial = [
    check('name')
        .notEmpty()
        .withMessage('Name cannot be empty').bail()
        .isLength({ min: 2, max: 50 })
        .withMessage("Name must be between 2-50 characters long"),

        check('content')
        .optional()
        .notEmpty()
        .withMessage('Content cannot be empty').bail()
        .isLength({ min: 10, max: 500 })
        .withMessage("Content must be between 10-500 characters long"),

    check('image')
        .optional()
        .notEmpty()
        .withMessage('Image cannot be empty').bail()
        .isLength({ min: 10, max: 500 })
        .withMessage("Image must be between 10-500 characters long"),
];

module.exports = {createTestimonial , /* updateTestimonial */}