const colormodel = require('../model/colorschema');

const createcolor = async (req, res) => {

    const { Color_code } = req.body;

    try {

        const createColor = {
            Color_code: Color_code
        }
        const data = await colormodel.create(createColor);
        console.log(data);
        res.status(201).send(data);
    } catch (error) {
        console.error(error);
        res.status(400).send('Error creating color');
    }
};
const getOneColor = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await colormodel.findOne({ _id: id });

        if (!data) {
            return res.status(404).send({ message: 'Color not found' });
        }

        res.status(200).send(data);
        console.log(data);
    } catch (error) {
        console.error("Error finding color:", error);
        res.status(500).send({ message: "An error occurred while finding color." });
    }
};
const getcolor = async (req, res) => {
    try {
        const data = await colormodel.find();
        console.log("Fetched Color Codes: ", data);
        res.status(200).send(data);
    } catch (error) {
        console.error("Error fetching Color: ", error);
        res.status(500).send({ message: "An error occurred while fetching Colors." });
    }
};
const updatecolor = async (req, res) => {
    const { Color_code } = req.body;
    const Color_id = req.params.id;

    try {
        // Update the color in the database
        const data = await colormodel.updateOne(
            { _id: Color_id }, // Find the color by its _id
            { $set: { Color_code: Color_code } } // Use $set to update the color field
        );

        // If the update was successful
        console.log("Update result:", data);
        res.status(200).send({ message: "Color updated successfully." });
    } catch (error) {
        console.error("Error updating color:", error);
        return res.status(500).send({ message: "Error updating color. Please try again later." });
    }
};





module.exports = { createcolor, getOneColor, getcolor, updatecolor }