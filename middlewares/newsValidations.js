let { check, body } = require('express-validator');
const db = require('../models');


const createNews = [
    check('name')
        .notEmpty()
        .withMessage('Name cannot be empty').bail()
        .isLength({ min: 2, max: 50 })
        .withMessage("Name must be between 2-50 characters long"),


    check('content')
        .notEmpty()
        .withMessage('Content cannot be empty').bail()
        .isLength({ min: 10, max: 500 })
        .withMessage("Content must be between 10-500 characters long"),

    check('image')
        .notEmpty()
        .withMessage('Image cannot be empty').bail()
        .isLength({ min: 10, max: 500 })
        .withMessage("Image must be between 2-500 characters long"),

    body('categoryId')
        .custom((value) => {
            return db.Categories.findOne({
                where: {
                    id: value
                }
            })
                .then(category => {
                    if (!category) {
                        return Promise.reject("There are no categories with that ID")
                    }
                })
                .catch((e) => Promise.reject("There are no categories with that ID"))
        }),
];

const updateNews = [
    check('name')
        .optional()
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

    body('categoryId')
        .optional()
        .notEmpty()
        .withMessage('CategoryId cannot be empty').bail()
        .custom((value) => {
            return db.Categories.findOne({
                where: {
                    id: value
                }
            })
                .then(category => {
                    if (!category) {
                        return Promise.reject("There are no categories with that ID")
                    }
                })
                .catch((e) => Promise.reject("There are no categories with that ID"))
        }),
]

module.exports = {createNews , updateNews}