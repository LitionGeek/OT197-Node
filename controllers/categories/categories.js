const db = require("../../models");
const { Categories } = require("../../models/index.js")
const paginate = require('../../utils/paginate.js')


//Create
const create = async (req, res) => {
    try {
        //check if unique
        const data = req.body
        const error = await uniqueName(data.name)
        if (error) {
            res.json({ error: 'Category must be unique.' });
            throw error
        }
        res.status(201).json(await db.Categories.create(req.body));
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
const remove = async (req, res) => {
    let category = await db.Categories.destroy({
        where: { id: req.params.id }
    });
    if (category == 0) {
        res.status(400).json({ error: 'Category not found.' });
    } else {
        res.status(200).json({ success: `Category ${req.params.id} removed succesfully.` })
    }
};


//Update
const update = async (req, res) => {
    //check if unique
    const data = req.body
    const error = await uniqueName(data.name)
    if (error) {
        res.json({ error: 'Category must be unique.' });
        throw error
    }
    let category = await db.Categories.update(req.body, { where: { id: req.params.id } });
    if (category == 0) {
        res.status(400).json({ error: 'Category not found or update information empty.' });
    } else {
        res.status(200).json({ success: `The member ${req.params.id} was updated succesfully.`, data: category })
    }

};

//Get All

const getAll = async (req, res) => {
    // let category = await db.Categories.findAll({ attributes: ['name'] });
    try {
       
        const { q, page } = req.query
        let search = {}

        if (q) {
            search = {
                where: {
                    name: {
                        [Op.like]: `%${q}%`
                    }
                }
            }
        }
        let category = await paginate(Categories, page)
        if (Object.keys(category).length === 0) {
            res.status(400).json({ error: 'Category database is empty.' });
        } else {
            res.status(200).json(category);
        }
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Failed to fetch activities"
        })
    }
};

//Get by id
const getById = async (req, res) => {
    try {
        let category = await db.Categories.findByPk(req.params.id);
        if (category === null) {
            res.status(404).json({ error: 'Category not found.' });
        } else {
            res.status(200).json(category);
        }
    } catch (err) {
        console.log(err);
        return res.status(500);
    }
};

const uniqueName = async (name) => {
    const result = await db.Categories.findOne({ where: { name: name } });
    if (result) {
        const error = new Error(`Name: ${name}, is not unique`)
        error.status = 400
        return error
    }
    return false
}

module.exports = {
    create,
    remove,
    update,
    getAll,
    getById
}
