
const express = require("express");

const app = express();

app.get("/", function(req, res){    // / represents the root of the websiet. Req = Require Res=Response
    res.send("<h1>Hello World</h1>")
});

app.get("/contact", function(req,res){
    res.send("contact me at: carlos@carlos.com")
})

app.listen(3000, function(){
    console.log("Sever started on port 3000")
}); //listen on port 3000