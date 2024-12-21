const express = require("express");
const  multer = require("multer");
// const jwt = require('jsonwebtoken');
// const privatekey = "#A*y*U*s*h#2710";

const path = require("path");

const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.json()) 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "./images/images"), function (error) {
      if (error) {
        throw error;
      }
    });
  },
  filename: function (req, file, cb) {
    const name = Date.now() + '-' + file.originalname
    cb(null, name, function (error) {
      if (error) {
        throw error;
      }
    })
  }
})  
const upload = multer({ storage: storage })

const db = require("./database/db")

const user = require("./controller/usercontroller")
const category = require("./controller/categorycontroller")
const subcategory = require("./controller/subcategorycontroller")
const color = require("./controller/colorcontroller")
const size = require("./controller/sizecontroller")
const product = require("./controller/productcontroller")
const mail = require("./controller/mail")
const FPass = require("./controller/FPass")
const review =require("./controller/reviewcontroller")

//user functions
const { verifytoken } = require("./middleware/userAuth");

//Api For send email 
app.post("/sendEmail", mail.sendEmail);

//API For otp match and reset password
app.post("/submitotp", FPass.submitotp);
app.post("/reset", FPass.resetpassword);

//User Login
app.post("/login", user.userlogin);

//user API
app.post("/insertuser", user.usercreate);
app.get("/getuser", verifytoken, user.userget);
app.put("/updateuser/:id", user.userupdate)
app.delete("/deleteuser/:id", user.userdelete);

//Category API
app.post("/createcategory", category.createcategory);
app.get("/getonecategory", category.getonecategory);
app.get("/getcategory", category.getcategory);
app.put("/updatecategory/:id", category.updatecategory);
app.delete("/deletecategory/:id", category.deletecategory);

//sub category API
app.post("/createsubcategory",subcategory.createsubcategory);
app.get("/getsubcategory",subcategory.getsubcategory);
app.get("/getonesubcategory",subcategory.getonesubcategory);
app.put("/updatesubcategory/:id",subcategory.updatesubcategory);
app.delete("/deletesubcategory/:id",subcategory.deletesubcategory);

//color API
app.post("/createcolor",color.createcolor);
app.get('/color/:id', color.getOneColor);
app.get('/getcolor/', color.getcolor);
app.put('/updatecolor/:id', color.updatecolor);
app.delete("/deletecolor/:id", color.deletecolor);


// Size API
app.post("/createsize",size.createsize);
app.get('/size/:id', size.getOneSize);
app.get('/getsize', size.getsize);
app.put('/updatesize/:id', size.updatesize);
app.delete("/deletesize/:id", size.deletesize);


//Product API
app.post("/createproduct", upload.array('image', 3), product.createproduct);
app.get('/searchproduct', product.searchproduct);
app.get('/getproduct', product.productget);
app.put('/updateproduct/:id', product.productupdate);
app.delete("/deleteproduct/:id", product.productdelete);

//Review API
app.post("/createreview", review.createreview);
app.get('/searchreview/:id', review.searchreview);


app.listen(3000);