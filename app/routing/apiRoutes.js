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
      for (let i=0; i<friendsData.length; i++){
        let scoreDiff1 = 0;
        for(let j=0; j<10; j++){
          scoreDiff1 = scoreDiff1 + Math.abs(friendsData[i].scores[j] - req.body.scores[j]);
        }
        console.log(`score difference ${i} is ${scoreDiff1}`);
      }
      friendsData.push(req.body);
      res.json(true);
  });
}
