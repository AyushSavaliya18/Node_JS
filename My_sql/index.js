const connection =require('./database/db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//   connection.connect();

//   connection.query('select * from user', function (error, results) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
//   });
   
//   connection.end();

app.get('/',(req,res)=>{
   res.sendFile(__dirname + '/form.html');
 })

app.post('/',(req,res)=>{
    // console.log(req.body);
const {name,email,password} = req.body;
})


app.listen(3000)