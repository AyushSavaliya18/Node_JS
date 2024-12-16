const colormodel =require ('../model/colorschema');

const createcolor = async  (req, res) =>{

    const {Color_code} = req.body;
    
    try {

        const createColor = {
            Color_code:Color_code
        }   
        const data = await colormodel.create(createColor);
        console.log(data);
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating color');
    }
}
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
const updatecolor = async (req, res) => {
    try {
        const { color } = req.body; // Get the color from request body
        const Color_id = req.params.id; // Get the subcategory ID from the URL params

        if (!color || typeof color !== 'string' || color.trim().length === 0) {
            return res.status(400).send({ message: "Invalid color value." });
        }

        const trimmedColor = color.trim(); // Trim the color string

        const data = await colormodel.updateOne(
            { _id: Color_id },
            { color: trimmedColor }
        );

        // If no document was modified, check if the color was already the same
        if (data.nModified === 0) {
            return res.status(404).send({ message: "No matching subcategory found or color is already up-to-date." });
        }

        // Success: return updated data
        return res.status(200).send({message: "Color updated successfully.",data});

    } catch (error) {
        console.error("Error updating color: ", error);
        return res.status(500).send({ message: "An error occurred while updating the color." });
    }
};



module.exports = { createcolor,getOneColor,updatecolor}