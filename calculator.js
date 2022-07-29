const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
    res.sendFile (__dirname+ "/index.html")
 
 });

app.post("/", function(req, res){
    var num1 =  Number( req.body.n1);
    var num2 =Number(  req.body.n2);
    var result = num1 + num2;

    res.send("the result of the calculation is "+ result);

});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname+"/bmicalculator.html");
});
app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight /(height*height);
    res.send("your bmi is "+ bmi)
});


app.listen(4000, function(req, res){
    console.log("running port 4000");

})