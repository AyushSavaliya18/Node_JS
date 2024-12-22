const subcategorymodel = require("../model/subcategoryschema");


const createsubcategory = async (req, res) => {
    try {
        const { subcategory  ,categoryid } = req.body;
        const subcategoryData = new subcategorymodel({
            subcategory: subcategory,
            categoryid: categoryid
        });

        const data = await subcategoryData.save()
        console.log("Created Subcategory: ", data);
        res.status(201).send({ message: 'Subcategory Created successfully', data });
    } catch (error) {
        console.error("Error creating subcategory: ", error);
        res.status(500).send({ message: "An error occurred while creating the subcategory." });
    }
};
const getonesubcategory = async (req, res) => {
    try {
        const subcategoryId = req.body.id; 

        const data = await subcategorymodel.findById(subcategoryId).populate('categoryid'); 

        if (!data) {
            return res.status(404).send({ message: 'Subcategory not found' });
        }

        res.status(200).send(data);
        console.log(data);
    } catch (error) {
        console.error("Error finding subcategory:", error);
        res.status(500).send({ message: "An error occurred while finding subcategory." });
    }
};


const getsubcategory = async (req, res) => {
    try {
        const data = await subcategorymodel.find().populate("categoryid");;
        console.log("Fetched Subcategories: ", data);
        res.status(200).send(data);
    } catch (error) {
        console.error("Error fetching subcategories: ", error);
        res.status(500).send({ message: "An error occurred while fetching subcategories." });
    }
};

const updatesubcategory = async (req, res) => {
    try {
        const { subcategory } = req.body;
        const data = await subcategorymodel.updateOne(
            { _id: req.params.id },
            { subcategory: subcategory.trim() }
        );

        console.log("Updated Subcategory: ", data);
        res.status(200).send({ message: "Subcategory updated successfully." ,data});
    } catch (error) {
        console.error("Error updating subcategory: ", error);
        res.status(500).send({ message: "An error occurred while updating the subcategory." });
    }
};

const deletesubcategory = async (req, res) => {
    try {
        const data = await subcategorymodel.deleteOne({ _id: req.params.id });

        if (data.deletedCount === 0) {
            return res.status(404).send({ message: "Subcategory not found." });
        }

        console.log("Deleted Subcategory: ", data);
        res.status(200).send({ message: "Subcategory deleted successfully.",data });
    } catch (error) {
        console.error("Error deleting subcategory: ", error);
        res.status(500).send({ message: "An error occurred while deleting the subcategory." });
    }
};

module.exports = { createsubcategory,getonesubcategory ,getsubcategory, updatesubcategory, deletesubcategory };
