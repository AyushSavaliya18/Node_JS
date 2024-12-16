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
const getonecolor = async (req, res) => {
    try {
        const colorId = req.body.id; 

        const data = await colormodel.findById(colorId); 

        if (!data) {
            return res.status(404).send({ message: 'color not found' });
        }

        res.status(200).send(data);
        console.log(data);
    } catch (error) {
        console.error("Error finding color:", error);
        res.status(500).send({ message: "An error occurred while finding color." });
    }
};
module.exports = { createcolor,getonecolor}