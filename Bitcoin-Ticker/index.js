const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express(); //new intance of express

app.use(bodyParser.urlencoded({extended: true})); //Up to here we always have to add

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req,res){

    //console.log(req.body.crypto);
    let crypto = req.body.crypto;
    let fiat = req.body.fiat;

    let baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
    let finalURL = baseURL + crypto + fiat;

    request(finalURL, function(error,response,body){
        
        let data = JSON.parse(body);
        let price = data.last;  //last is the name of the key value we are looking for (latest value of btc)
        console.log(price);
        
    res.send("<h1>The current price of " + crypto + " is " + price + fiat + "</h1>");
        
        //console.log(response);  //Brings a lot of data
        //console.log(response.statusCode);  //Retruns 200 which means request was successful. Check other HTTP Status Codes here: https://httpstatuses.com
        //console.log(body);
    });

});


app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});