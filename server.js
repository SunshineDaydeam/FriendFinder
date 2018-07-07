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

var friendsArray = require("./app/data/friend");

app.get('/api/friends', function(req, res){
    res.json(friendsArray);
});

//Where all the magic happens
app.post("/api/friends", function(req, res){
    var compatScoreArray = [];
    var newScores = req.body.scores;
    //Goes through each current friend in the array
    for (i=0; i<friendsArray.length;i++){

        //Runs through the scores to compare
        var compatScore = 0;
        for (j=0; j<newScores.length; j++){
             var diff = (newScores[j] - friendsArray[i].scores[j]);
             compatScore += Math.abs(diff);
        }
        // console.log(friendsArray[i].name);
        // console.log(compatScore);
        compatScoreArray.push(compatScore);
    }

    //lowestNumber
    var lowestNum = Math.min.apply(null, compatScoreArray);
    //Index of the Best Match
    var bestMatch = compatScoreArray.indexOf(lowestNum);

    var perfectMatch = friendsArray[bestMatch];
    console.log(perfectMatch);

    res.json(perfectMatch);

    // friendsArray.push(req.body);
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



