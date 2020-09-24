const router = require("express").Router();
var path = require("path");

// Routes
// =============================================================

  router.get("/", function(req, res) {
    console.log(req);
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  router.get("/exercise", function(req, res) {
    console.log(req);
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  router.get("/exercise?", function(req, res) {
    console.log(req);
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  router.get("/stats", function(req, res) {
    console.log(req);
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });



module.exports = router;

