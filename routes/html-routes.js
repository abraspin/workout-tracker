const path = require("path");

module.exports = function (app) {
  // Home Page (index.html)
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html")).catch((err) => {
      res.status(400).json(err);
    });
  });

  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  // // Catch all routes to index.html (not currently in use)
  // app.get("/*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });
};
