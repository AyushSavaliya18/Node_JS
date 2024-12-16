const categorymodel = require("../model/categoryschema.js");

const createcategory = async (req, res) => {

    const categorydata = { category: req.body.category }
    const data = await categorymodel.create(categorydata);
    console.log(data);
    res.send(data);
}
const getonecategory = async (req, res) => {
    try {
        const categoryId = req.body.id; 

        const data = await categorymodel.findById(categoryId); 

        if (!data) {
            return res.status(404).send({ message: 'Category not found' });
        }

        res.status(200).send(data);
        console.log(data);
    } catch (error) {
        console.error("Error finding Category:", error);
        res.status(500).send({ message: "An error occurred while finding Category." });
    }
};

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
module.exports = { createcategory,getonecategory ,getcategory, updatecategory, deletecategory }