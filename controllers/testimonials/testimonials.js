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

        db.Testimonial.create({
            ...req.body
        })
            .then((testimonial) => {
                return res.json({
                    msg: "Testimonial created successfully",
                    ok: true,
                    url: '/testimonial',
                    data: testimonial
                });
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
        db.Testimonial.update({
            ...req.body
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                if (result != 0) {
                    return res.json({
                        msg: `Testimonial ${req.params.id} edited succesfully`,
                        ok: true,
                        url: `testimonial/${req.params.id}`
                    });
                } else {
                    return res.json({
                        msg: `Testimonial ${req.params.id} not found`,
                        ok: false,
                        url: `testimonial/${req.params.id}`
                    });
                }

            })
            .catch(e => console.log(e))
    },
}