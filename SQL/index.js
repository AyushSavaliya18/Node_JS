const express = require("express")
const path = require("path");
const con = require("./database/db")
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))



app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "views"));

app.get("/signup", (req, res) => {
    res.render("signup"); // Render the signup.ejs file
});


app.listen(3000, () => {
    console.log(" server is runnig...");
})