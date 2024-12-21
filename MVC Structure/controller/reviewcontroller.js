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
    res.send(data);
  }

  const searchreview = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Search for the review by its MongoDB _id
      const data = await reviewmodel.findById(id);
  
      if (!data) {
        return res.status(404).json({ message: 'Review not found' });
      }
  
      console.log(data); 
      res.status(200).send(data); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching review', error: error.message });
    }
  };
  const getallreviews = async (req, res) => {
    const data = await reviewmodel.find().populate('User_id').populate('Product_id');
    console.log(data);
    res.status(202).send(data);
  };
  const reviewupdate = async (req, res) => {
    const data = await reviewmodel.updateOne({ _id: req.params.id }, {
      "Description": req.body.Description,
      "User_id": req.body.User_id,
      "Product_id": req.body.Product_id
    })
    console.log(data);
    res.send(data);
  }

  const deletereview = async (req, res) => {
    const data = await reviewmodel.deleteOne({ _id: req.params.id });
    console.log(data);
    res.send(data)
  }
  
module.exports ={createreview,searchreview,getallreviews,reviewupdate,deletereview}