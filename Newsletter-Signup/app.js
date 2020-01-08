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
})



app.listen(3000, function(){
    console.log("Server is running on port 3000.")
});