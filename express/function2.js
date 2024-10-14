const express = require("express");
const app = express();

const {add, sub, multi, div} = require("./fun");

 app.get("/add/:n1/:n2", function (req, res) {
       // res.send(add(req.query.n1, req.query.n2));
       res.send(add(req.params.n1, req.params.n2));
     });
     app.get("/sub/:n1/:n2", function (req, res) {
           // res.send(sub(req.query.n1, req.query.n2));
           res.send(sub(req.params.n1, req.params.n2));
         });
        
         app.all("/multi/:n1/:n2", function (req, res) {
             // res.send(multi(req.query.n1, req.query.n2));
               res.send(multi(req.params.n1, req.params.n2));
             });
            
             app.get("/div/:n1/:n2", function (req, res) {
              // res.send(div(req.query.n1, req.query.n2));
                   res.send(div(req.params.n1, req.params.n2));
                });
    
               
                
                
app.listen(8000);       