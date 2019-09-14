// ===============================================================================
// DEPENDENCIES
// ===============================================================================
let path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

// ===============================================================================
// API GET Requests
// ===============================================================================

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // NO match default.
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
