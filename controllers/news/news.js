const db = require("../../models");
const { validationResult } = require('express-validator');

module.exports = {
    /* Insert function of controller (create, delete, edit, etc.) */
    create: (req, res) => {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.json({
                ok: false,
                errors: errors.mapped()
            })
        }

        const { name, content, image, categoryId } = req.body

        db.News.create({
            name: name,
            content: content,
            image: image,
            categoryId: categoryId
        })
            .then((user) => {
                return res.json({
                    msg: "News created successfully",
                    ok: true,
                    url: '/news',
                    data: user
                });
            })
            .catch(e => console.log(e))
    },
    detail: (req, res) => {
        db.News.findOne({
            where: {
                id: req.params.id
            },
            include: [{ association: "category" }]
        })
            .then(news => {
                if (news != null) {
                    return res.json({
                        ok: true,
                        data: news,
                        url: ('/news/' + req.params.id),
                    });
                } else {
                    return res.json({
                        ok: false,
                        msg: 'New not found',
                        url: ('/news/' + req.params.id),
                    });
                }
            })
            .catch(e => console.log(e))
    },
    delete: (req, res) => {
        db.News.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((result) => {
                if (result) {
                    return res.json({
                        msg: `News ${req.params.id} removed succesfully.`,
                        ok: true,
                        url: `news/${req.params.id}`
                    });
                } else {
                    return res.json({
                        msg: `News ${req.params.id} not found`,
                        ok: false,
                        url: `news/${req.params.id}`
                    });
                }

            })
            .catch(e => console.log(e))
    },
    edit: (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({
                ok: false,
                errors: errors.mapped()
            })
        }
        db.News.update({
            ...req.body
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                if (result != 0) {
                    return res.json({
                        msg: `News ${req.params.id} edited succesfully`,
                        ok: true,
                        url: `news/${req.params.id}`
                    });
                } else {
                    return res.json({
                        msg: `News ${req.params.id} not found`,
                        ok: false,
                        url: `news/${req.params.id}`
                    });
                }

            })
            .catch(e => console.log(e))
    },
}