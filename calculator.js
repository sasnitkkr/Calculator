const express = require("express");
const app = express()
const port = 3000

// Incorporate that package into our current project
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
// get our app use body parser
// body parser works with express
// bp has some modes like bp.text or bp.json
// use urlencoded -> to grab information that get posted to server from html form
// we also add option 'extended' => allows us to post nested objects -> bp is asking you to explicitly declare

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

// till here our server is not accepting post requests
// not accepting anybody to post

app.post("/", function(req, res){
    //console.log(req.body);
    // console.log(req.body.num1);
    // let n1 = req.body.num1; -> get parsed as text
    let n1 = Number(req.body.num1);
    // console.log(req.body.num2); -> get parsed as text
    let n2 = Number(req.body.num2);
    // res.send("Thanks for input.");
    let ans = n1+n2;
    res.send(n1 + " + " + n2 + " = " + ans);
})

app.listen(port, function(){
    console.log("App listening at port" + port);
})