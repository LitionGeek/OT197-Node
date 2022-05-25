const categories = require("../../models/Categories.js");
const { Categories } = require("../../models/Categories.js");

//Create
const create = async(req, res) => {
    try {
        //check if unique
        const error = await uniqueName(category.name)
        if (error) {
            res.json({ error: 'Category name is not unique.' });
            throw error
        }
        res.status(201).json(await Categories.create(req.body));
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
    let category = await Categories.destroy({
        where: { id: req.params.idCat }
    });
    if (pers == 0) {
        res.status(400).json({ error: 'Category not found.' });
    } else {
        res.status(200).json({ success: `Category ${req.params.id} removed succesfully.` })
    }
};


//Update
const update = async(req, res) => {
    //check if unique
    const error = await uniqueName(category.name)
    if (error) {
        res.json({ error: 'Category name is not unique.' });
        throw error
    }
    let category = await Categories.update(req.body, { where: { id: req.params.idCat } });
    if (pers == 0) {
        res.status(400).json({ error: 'Category not found or update information empty.' });
    } else {
        res.status(200).json({ success: `The member ${req.params.id} was updated succesfully.`, data: category })
    }

};

//Get All
const getAll = async(req, res) => {
    let category = await Categories.findAll();
    if (Object.keys(pers).length === 0) {
        res.status(400).json({ error: 'Category database is empty.' });
    } else {
        res.status(200).json(category);
    }
};

//Get by id
const getById = async(req, res) => {
    try {
        let category = Categories.findByPk(req.params.idCat);
        if (Object.keys(pers).length === 0) {
            res.status(400).json({ error: 'Category not found.' });
        } else {
            res.status(200).json(category);
        }
    } catch (err) {
        console.log(err);
        return res.status(500);
    }
};

const uniqueName = async(name) => {
    const result = await Categories.findOne({ where: { name } });
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