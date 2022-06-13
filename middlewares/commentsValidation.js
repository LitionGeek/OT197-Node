const { body } = require('express-validator')
const { executeValidation } = require('./validation-index')
const isAdmin = require('../middlewares/adminMiddleware');
const { getUserById, getNewsById } = require('../controllers/comments/news-user-getById')


const validateComments = [
    body('userId')
    .notEmpty()
    .withMessage('You need to enter a userId!')
    .bail()
    .isNumeric()
    .withMessage('Invalid userId')
    .bail(),
    body('newsId')
    .notEmpty()
    .withMessage('You need to enter a newsId!')
    .bail()
    .isNumeric()
    .withMessage('Invalid newsId')
    .bail(),
    body('body').notEmpty().withMessage('You need to enter a body!'),
    executeValidation
]

const newsAndUserExisting = async(req, res, next) => {
    try {
        const newId = req.body.newsId
        const userId = req.body.userId
        const news = await getNewsById(newId)
        const user = await getUserById(userId)
        if (!news || !user) {
            const error = new Error('non-existent news or user')
            error.status = 400
            throw error
        }
        if (news && user) {
            return next()
        }
    } catch (error) {
        next(error)
    }
}

const isOwnCommentOrAdmin = async(req, res, next) => {
    try {
        if (req.user.id == req.body.userId || isAdmin) {
            return next()
        }
    } catch (error) {
        next(error)
    }
}

module.exports = { validateComments, isOwnCommentOrAdmin, newsAndUserExisting }