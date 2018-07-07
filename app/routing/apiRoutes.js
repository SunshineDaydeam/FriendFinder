var friendsArray = require('../data/friend');

module.exports = function(app){
    //If /api/friends is selected, display jsonData
    app.get('/api/friends', function(req, res){
        res.json(friendsArray);
    });


    app.post("/api/friends", function(req, res){
        
        var compatScoreArray = [];
        var newScores = req.body.scores;
        //Goes through each current friend in the array
        for (i=0; i<friendsArray.length;i++){
            //Set Compatibility Score
            var compatScore = 0;
            //Runs through the scores to compare
            for (j=0; j<newScores.length; j++){
                //find the difference between user's score and potential friends scores
                 var diff = (newScores[j] - friendsArray[i].scores[j]);
                 //Add the absolut value of that score to the compatibility score
                 compatScore += Math.abs(diff);
            }
            //push each user's score to the compatScoreArray
            compatScoreArray.push(compatScore);
        }
    
        //find the lowest Number
        var lowestNum = Math.min.apply(null, compatScoreArray);
        //Find the Index of the that lowest number
        var bestMatch = compatScoreArray.indexOf(lowestNum);
        //define perfect match from that index
        var perfectMatch = friendsArray[bestMatch];
        console.log(perfectMatch);
    
        res.json(perfectMatch);
    
        friendsArray.push(req.body);
    });

};