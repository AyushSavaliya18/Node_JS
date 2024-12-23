const reviewmodel = require("../model/reviewschema");
const createreview = async (req, res) => {

    const {  Description, User_id, Product_id } = req.body;
  
    const reviewdata = {

      "Description": Description,
      "User_id": User_id,
      "Product_id": Product_id
    }
    const data = await reviewmodel.create(reviewdata)
    console.log(data);
    res.status(201).send({ message: 'Review Created successfully', data });
  }

  const searchreview = async (req, res) => {
    try {
        const Review_id = req.body.id; 
  
        const data = await reviewmodel.findById(Review_id).populate('User_id').populate('Product_id'); 
  
        if (!data) {
            return res.status(404).send({ message: 'Review not found' });
        }
  
        res.status(200).send({message:"Review Found Successfully",data});
        console.log(data);
    } catch (error) {
        console.error("Error finding Review:", error);
        res.status(500).send({ message: "An error occurred while finding Review." });
    }
  };

  const getallreviews = async (req, res) => {
    const data = await reviewmodel.find().populate('User_id').populate('Product_id');
    console.log(data);
    res.status(202).send({ message: 'Review Fetched successfully', data });
  };
  const reviewupdate = async (req, res) => {
    const data = await reviewmodel.updateOne({ _id: req.params.id }, {
      "Description": req.body.Description,
      "User_id": req.body.User_id,
      "Product_id": req.body.Product_id
    })
    console.log(data);
    res.status(200).send({ message: 'Review Updated successfully', data });
  }

  const deletereview = async (req, res) => {
    const data = await reviewmodel.deleteOne({ _id: req.params.id });
    console.log(data);
    res.status(200).send({ message: 'Review Deleted successfully', data })
  }
  
module.exports ={createreview,searchreview,getallreviews,reviewupdate,deletereview}