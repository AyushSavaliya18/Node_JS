const categorymodel = require("../Models/categoryschema.js");

const createcategory = async (req, res) => {

    const categorydata = { category: req.body.category }
    const data = await categorymodel.create(categorydata);
    console.log(data);
    res.send(data);
}

const getcategory = async (req, res) => {
    const data = await categorymodel.find();
    console.log(data);
    res.send(data);
}

const updatecategory = async (req, res) => {
    const data = await categorymodel.updateOne(
        { _id: req.params.id },
        {
            category: req.body.category}
    );
    console.log(data);
    res.send(data);
}

const deletecategory = async (req, res) => {

    const data = await categorymodel.deleteOne({ _id: req.params.id });
    console.log(data);
    res.send(data);
}
module.exports = { createcategory, getcategory, updatecategory, deletecategory }