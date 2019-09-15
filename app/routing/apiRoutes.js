// ===============================================================================
// Link to "data" sources.
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  
// ===============================================================================
// API GET Requests
// ===============================================================================
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // ===============================================================================
  // API POST Requests
  // ===============================================================================
  app.post("/api/friends", function(req, res) {
      let lowestScore = -1;
      let lowestIndex = -1;
      for (let i=0; i<friendsData.length; i++){
        let scoreDiff = 0;
        for(let j=0; j<10; j++){
          scoreDiff = scoreDiff + Math.abs(friendsData[i].scores[j] - req.body.scores[j]);
        }
        if (lowestScore === -1){
          lowestScore = scoreDiff
          lowestIndex = i;
        }else if (scoreDiff <= lowestScore){
          lowestScore = scoreDiff;
          lowestIndex = i;
        }
        console.log(`score difference ${i} is ${scoreDiff}`);
      }
      friendsData.push(req.body);
      res.json(friendsData[lowestIndex]);
  });
}
