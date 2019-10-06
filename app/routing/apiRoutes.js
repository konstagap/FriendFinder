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
    var totalDifference = 0;
    for (var a = 0; a < newPerson.scores.length; a++) {
      totalDifference += Math.abs(parseInt(newPerson.scores[a]) - parseInt(possibleMatch[i].scores[a]));
    }
    if (totalDifference < minimmuScore) {
      matchPosition = i;
      minimmuScore = totalDifference;
    }
  }
  // console.log(possibleMatch[matchPosition])
    possibleMatch.push(newPerson)
    res.send(possibleMatch[matchPosition]);

  });
};

