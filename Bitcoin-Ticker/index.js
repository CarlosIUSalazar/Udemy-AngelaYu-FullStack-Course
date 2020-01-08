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
    var amount = req.body.amount;

    let options = {
        url: "https://apiv2.bitcoinaverage.com/convert/global",
        method: "GET",
        qs: {
            from: crypto,
            to: fiat,
            amount: amount,
        }
    }

    request(options, function(error,response,body){
        
        let data = JSON.parse(body);
        let price = data.price;  //price is the name of the key value we are looking for
        console.log(price)
        var currentDate = data.time;

    res.write("<p>The current date is " + currentDate +"</p>");

    res.write("<h1>" + amount + crypto + " is currently worth " + price + fiat + "</h1>");
        
    res.send();
        
        //console.log(response);  //Brings a lot of data
        //console.log(response.statusCode);  //Retruns 200 which means request was successful. Check other HTTP Status Codes here: https://httpstatuses.com
        //console.log(body);
    });

});


app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});