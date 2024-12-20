const productmodel = require("../model/productschema");

const createproduct = async (req, res) => {
    try {
        const { Product_name, Price, Deposite, Qty, Description, Sub_c_id, Cat_id, User_id, Color_id, Size_id } = req.body;

        const imageArray = [];

        for (let i = 0; i < req.files.length; i++) {
            imageArray[i] = req.files[i].filename;

        }
        const productData = {
            "Product_id": Product_id,
            "Product_name": Product_name,
            "Price": Price,
            "Deposite": Deposite,
            "Qty": Qty,
            "Description": Description,
            "image": imageArray,
            "Sub_c_id": Sub_c_id,
            "Cat_id": Cat_id,
            "User_id": User_id,
            "Color_id": Color_id,
            "Size_id": Size_id
        }

        const data = await productmodel.create(productData);
        console.log(data);
        res.send(data);
    } catch (error) {

        // console.log(error);r

        if (error.name === 'ValidationError') {
            // Return the validation error in the response
            return res.status(400).json({ error: error.message });
        }
        // Return general error
        res.status(500).send('Server Error');

    }
}
module.exports = {
    createproduct
}