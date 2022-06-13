const Comments = require("../../models/Comments.js");
const db = require("../../models");


//Create
const create = async(req, res) => {
    try {
        res.status(201).json(await db.Comments.create(req.body));
    } catch (err) {
        const errObj = {};
        err.errors.map(er => {
            errObj[er.path] = er.message;
        })
        console.log(errObj);
        res.status(400).json(errObj);
    }
};

//Remove
const remove = async(req, res) => {
    let comment = await db.Comments.destroy({
        where: { id: req.params.id }
    });
    if (comment == 0) {
        res.status(400).json({ error: 'Comment not found.' });
    } else {
        res.status(200).json({ success: `Comment ${req.params.id} removed succesfully.` })
    }
};


//Update
const update = async(req, res) => {
    let comment = await db.Comments.update(req.body, { where: { id: req.params.id } });
    if (comment == 0) {
        res.status(400).json({ error: 'Comment not found or update information empty.' });
    } else {
        res.status(200).json({ success: `Comment ${req.params.id} was updated succesfully.`, data: category })
    }

};

//Get All
const getAll = async(req, res) => {
    let comment = await db.Comments.findAll({
        order: [
            ["createdAt", "DESC"]
        ],
        attributes: ["body"],
    });

    if (Object.keys(comment).length === 0) {
        res.status(400).json({ error: 'Comment database is empty.' });
    } else {
        res.status(200).json(comment);
    }
};

const getCommentsByNewsId = async(req, res) => {
    let comment = await db.Comments.findAll({
        where: { newsId: req.parm.id }
    });

    if (Object.keys(comment).length === 0) {
        res.status(400).json({ error: 'Comment database is empty or post comments empty' });
    } else {
        res.status(200).json(comment);
    }
};

//Get by id
const getById = async(req, res) => {
    try {
        let comment = await db.Comments.findByPk(req.params.id);
        if (comment === null) {
            res.status(404).json({ error: 'Comment not found.' });
        } else {
            res.status(200).json(comment);
        }
    } catch (err) {
        console.log(err);
        return res.status(500);
    }
};



module.exports = {
    create,
    remove,
    update,
    getAll,
    getById,
    getCommentsByNewsId
}