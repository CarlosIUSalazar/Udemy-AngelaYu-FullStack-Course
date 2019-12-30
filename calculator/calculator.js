const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true})); //To pass data from the html form. Extended allows to post nested objects

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

    console.log(req.body);
    let num1 = Number(req.body.num1); // Number() converts string to number
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send("Teh result of the calculation is " + result)
});

////

app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req,res){

    let weight = parseFloat(req.body.weight);  //use parseFloat instead of Number to make it decimal
    let height = parseFloat(req.body.height);
    let bmiResult = weight/((height/100)**2);
    res.send("Your BMI is: " + bmiResult);
})


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});

