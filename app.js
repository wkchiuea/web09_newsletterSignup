
const express = require("express");
const bodyParser = require("body-parser");

app = express();
app.use(bodyParser);

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});


