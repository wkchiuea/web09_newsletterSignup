
const express = require("express");

app = express();
app.use(express.static("public")); // declare the path of the static files
app.use(express.urlencoded({extended: true})); // parse requested data

app.get("/", function(req, res) {
    console.log("haha");
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res) {

    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;

});

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});


