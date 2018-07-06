var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

console.log("You opened this page");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// require('./app/routing/apiRoutes')(app);
// require('./app/routing/htmlRoutes');

//--------------------API ROUTES--------------------------//

var friendsArray = require("./app/data/friend.js");

app.get('/api/friends', function(req, res){
    res.json(friendsArray);
});

app.get('/api/newFriends', function(req, res){
    res.json(newFriend);
});

//--------------------END API ROUTES--------------------------//

//--------------------HTML ROUTES--------------------------//

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

//--------------------END HTML ROUTES--------------------------//

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
    // console.log(friends);
});



