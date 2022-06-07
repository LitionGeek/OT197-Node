const db = require("../../models");
const { sendGridEmail } = require('../../middlewares/sendGridEmail');


//Create
const create = async(req, res) => {
    try {
        //check if unique
        const data = req.body
        const error = await uniqueEmail(data.email)
        if (error) {
            res.json({ error: 'Email must be unique.' });
            throw error
        }
        res.status(201).json(await db.Contacts.create(req.body));
        //send email after creating contact
        sendGridEmail(req.body.email, 'Thank you for contacting us!')
    } catch (err) {
        const errObj = {};
        err.errors.map(er => {
            errObj[er.path] = er.message;
        })
        console.log(errObj);
        res.status(400).json(errObj);
    }
};

//Get All
const getAll = async(req, res) => {
    let contact = await db.Contacts.findAll();

    if (Object.keys(contact).length === 0) {
        res.status(400).json({ error: 'Contact database is empty.' });
    } else {
        res.status(200).json(contact);
    }
};

const uniqueEmail = async(email) => {
    const result = await db.Contacts.findOne({ where: { email: email } });
    if (result) {
        const error = new Error(`Email: ${Email}, is not unique`)
        error.status = 400
        return error
    }
    return false
}

module.exports = {
    create,
    getAll
}