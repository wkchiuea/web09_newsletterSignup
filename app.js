
const express = require("express");
const https = require("https");

app = express();
app.use(express.static("public")); // declare the path of the static files
app.use(express.urlencoded({extended: true})); // parse requested data

app.get("/", function(req, res) {
    console.log("haha");
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res) {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us8.api.mailchimp.com/3.0/lists/6320d43cfc";

    const options = {
        method: "POST",
        auth: "wkchiuea: 8fc1ac358d77aa64f6e40a519c2e4a4e-us8"
    };

    const request = https.request(url, options, function(response) {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data) {
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();

});

app.post("/failure", function(req, res) {
    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});

// 8fc1ac358d77aa64f6e40a519c2e4a4e-us8
// 6320d43cfc