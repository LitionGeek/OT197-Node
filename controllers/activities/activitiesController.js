const { Activities } = require("../../models/index.js")
const { validationResult } = require('express-validator');

const activitiesController = {
    create: async (req, res) => {

        const errors = validationResult(req);
        // Validate errors
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        else {
            try {
                console.log(req.body)
                Activities.create(req.body)
                    .then((activity) => {
                        res.status(200).send(activity)
                    })

            } catch (err) {
                res.status(400).json(err);
            }
        }
    },
}

module.exports = activitiesController