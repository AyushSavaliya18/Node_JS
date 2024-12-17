const sizemodel = require('../model/sizeschema');

const createsize = async (req, res) => {
    const { Size_name } = req.body;

    try {
        const createSize = { Size_name };
        const data = await sizemodel.create(createSize);

        console.log(data);

        res.status(201).send(data);
    } catch (error) {

        console.error('Error creating size:', error);
        res.status(500).send({ message: 'Error creating size', error: error.message });
    }
};

const getOneSize = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await sizemodel.findOne({ _id: id });

        if (!data) {
            return res.status(404).send({ message: 'Size not found' });
        }

        res.status(200).send(data);
        console.log(data);
    } catch (error) {
        console.error("Error finding color:", error);
        res.status(500).send({ message: "An error occurred while finding color." });
    }
};

const getsize = async (req, res) => {
    try {
        const data = await sizemodel.find();
        console.log("Fetched Size Names: ", data);
        res.status(200).send(data);
    } catch (error) {
        console.error("Error fetching Sizes: ", error);
        res.status(500).send({ message: "An error occurred while fetching Sizes." });
    }
};

const updatesize = async (req, res) => {
    const { Size_name } = req.body;
    const Size_id = req.params.id;

    try {

        const data = await sizemodel.updateOne(
            { _id: Size_id },
            { $set: { Size_name: Size_name } }
        );

        console.log("Update result:", data);
        res.status(200).send({ message: "Size updated successfully." });
    } catch (error) {
        console.error("Error updating Size:", error);
        return res.status(500).send({ message: "Error updating Size. Please try again later." });
    }
};

const deletesize = async (req, res) => {
    try {
        const data = await sizemodel.deleteOne({ _id: req.params.id });

        console.log("Deleted Size: ", data);
        res.status(200).send({ message: "Size deleted successfully.",data });
    } catch (error) {
        console.error("Error deleting Size: ", error);
        res.status(500).send({ message: "An error occurred while deleting the Size." });
    }
};
module.exports = { createsize, getOneSize, getsize, updatesize,deletesize };