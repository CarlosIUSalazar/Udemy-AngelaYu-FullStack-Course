const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.set("view engine", "ejs");  //place this line below const app = express();

app.get("/", function (req, res) {

    let today = new Date();
    // let currentDay = today.getDay();
    // let day = "";

    // if(currentDay === 0){ //0 Sunday, 6 Saturday
    //     day = "Sunday";
    // } else if (currentDay === 1){
    //     day = "Monday";
    // } else if (currentDay === 2){
    //     day = "Tuesday";
    // } else if (currentDay === 3){
    //     day = "Wednesday";
    // } else if (currentDay === 4){
    //     day = "Thursday";
    // } else if (currentDay === 5){
    //     day = "Friday";
    // } else if (currentDay === 6){
    //     day = "Saturday";
    // }

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;

    //     default:
    //         console.log("Error: current day is eauql to: " + currentDay);
    //         //break;
    // }

    let options = {   //https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    let day = today.toLocaleDateString("en-US", options);


    res.render("list", { 
        kindOfDay: day 
    });    //is gonna look for folder views and file list.ejs

});










app.listen(3000, function () {
    console.log("Server started on port 3000");
});