const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//https://github.com/mde/ejs/wiki/Using-EJS-with-Express

let items = ["Buy food", "Cook food", "Eat food"];
let workItems = [];

app.set("view engine", "ejs");  //place this line below const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")); //This tells express to serve the static files in folder public and it's a necessary step.

app.get("/", function (req, res) {

    let today = new Date();
    // let currentDay = today.getDay();
    // let day = "";
    let options = {   //https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    let day = today.toLocaleDateString("en-US", options);


    res.render("list", { 
        listTitle: day,
        newListItems: items 
    });    //is gonna look for folder views and file list.ejs
});



app.post("/", function(req,res){

    let item = req.body.newItem;

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});



app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req,res) {
    res.render("about");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});