const productmodel = require("../model/productschema");

const createproduct = async (req, res) => {


  try {
    const { Product_id, Product_name, Price, Deposite, Qty, Description, Sub_c_id, Cat_id, User_id, Color_id, Size_id } = req.body;

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
    res.status(201).send({ message: 'Product Created successfully', data });

  } catch (error) {

    // console.log(error);

    if (error.name === 'ValidationError') {
      // Return the validation error in the response
      return res.status(400).json({ error: error.message });
    }
    // Return general error
    res.status(500).send('Server Error');

  }
}

const findproduct = async (req, res) => {
  try {
      const Product_id = req.body.id; 

      const data = await productmodel.findById(Product_id).populate('Sub_c_id'); 

      if (!data) {
          return res.status(404).send({ message: 'Product not found' });
      }

      res.status(200).send({message:"Product Found Successfully",data});
      console.log(data);
  } catch (error) {
      console.error("Error finding Product:", error);
      res.status(500).send({ message: "An error occurred while finding Product." });
  }
};
  const productget = async (req, res) => {
    const data = await productmodel.find().populate('Sub_c_id');
    console.log(data);
    res.status(200).send({ message: 'Product Fetched successfully', data });
  }

  const productupdate = async (req, res) => {
    const data = await productmodel.updateOne({ _id: req.params.id }, {
      "Product_id": req.body.Product_id,
      "Product_name": req.body.Product_name,
      "Price": req.body.Price,
      "Deposite": req.body.Deposite,
      "Qty": req.body.Qty,
      "Description": req.body.Description,
      "image": req.body.imageArray,
      "Sub_c_id": req.body.Sub_c_id,
      "Cat_id": req.body.Cat_id,
      "User_id": req.body.User_id,
      "Color_id": req.body.Color_id,
      "Size_id": req.body.Size_id
    })
    console.log(data);
    res.status(202).send({ message: 'Product Updated successfully', data });
  };

  const productdelete = async (req, res) => {
    const data = await productmodel.deleteOne({ _id: req.params.id });
    console.log(data);
    res.status(202).send({ message: 'Product Deleted successfully', data });
  };
module.exports = {
    createproduct,findproduct,productget,productupdate,productdelete
}