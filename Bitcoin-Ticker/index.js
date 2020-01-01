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

    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function(error,response,body){
        //console.log(response);  //Brings a lot of data
        //console.log(response.statusCode);  //Retruns 200 which means request was successful. Check other HTTP Status Codes here: https://httpstatuses.com
        console.log(body);
    });

});


app.listen(2000, function() {
    console.log("Server is running on port 3000.");
});