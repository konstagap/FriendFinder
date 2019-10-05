var posibleFriends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(posibleFriends);
  });

  app.post("/api/friends", function(req, res) {
    var newPerson = req.body;
    var totalDifference =0;
    if (newPerson.scores){
      totalDifference += Math.abs(parseInt(newPerson.scores[0]) - parseInt(posibleFriends[0].scores[0]))
      console.log("new pesron : " +parseInt(newPerson.scores[0]))
      console.log(" first object in base: " +parseInt(posibleFriends[0].scores[0]))
      console.log(" differens " + totalDifference)
    }
  
    // posibleFriends.push(newPerson)
    res.send(true);

  });
};

// app.post("/api/tables", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body parsing middleware
//     if (tableData.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     }
//     else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });

//   // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
