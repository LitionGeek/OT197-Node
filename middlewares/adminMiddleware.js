function adminMiddleware(req, res, next) {
        if (req.user && req.user.roleId == 1) {
        next();
    } else {
        res.status(401).send({ message: 'Invalid Admin Token' });
    }
};
module.exports = adminMiddleware