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


module.exports = {createsize,getOneSize,getsize};