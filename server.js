//Requires these NPM Installs
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Requires Routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

//Begin Listening
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
    // console.log(friends);
});



