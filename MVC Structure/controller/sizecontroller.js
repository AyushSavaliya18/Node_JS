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

module.exports = {createsize};