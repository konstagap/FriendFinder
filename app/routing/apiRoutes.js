var possibleMatch = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(possibleMatch);
  });

  app.post("/api/friends", function(req, res) {
    var newPerson = req.body;
    
  var matchPosition = 0;
  var minimmuScore = 99;

  for (var i = 0; i < possibleMatch.length; i++) {
    var scoreDifference = 0;
    for (var a = 0; a < newPerson.scores.length; a++) {
      scoreDifference += Math.abs(parseInt(newPerson.scores[a]) - parseInt(possibleMatch[i].scores[a]));
    }
    if (scoreDifference < minimmuScore) {
      matchPosition = i;
      minimmuScore = scoreDifference;
    }
  }
  // console.log(possibleMatch[matchPosition])
    possibleMatch.push(newPerson)
    res.send(possibleMatch[matchPosition]);

  });
};

