const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express(); //new instance of express

app.use(bodyParser.urlencoded({extended: true})); //Up t here we always have to add

app.use(express.static("public")); //We need this to publish static content.  Created a "Public" folder with CSS and Images inside so they can be displayed

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html")
});


app.post("/", function(req,res){
    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let email = req.body.email;

    console.log(firstName, lastName, email)

    let options = {
        url: "https://us4.api.mailchimp.com/3.0/lists/a68553c2ec",
        method: "POST",

    }

    request(options,function(error, response, body){
        if (error) {
            console.log(error);
        } else {
            console.log(response.statusCode);
        }
    });

});



app.listen(3000, function(){
    console.log("Server is running on port 3000.")
});

// API Key
//46b377147b4fd3c0fc854ee372077565-us4
// List ID
//a68553c2ec