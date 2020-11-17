module.exports = function (app) {
  // All I need to do in here is set up routes for the 2 files, and then a * catch all to send me home if I want (I want)};

  // Home Page (index.html)
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html")).catch((err) => {
      res.status(400).json(err);
    });
  });

  // exercise.html
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html")).catch((err) => {
      res.status(400).json(err);
    });
  });

  // stats.html
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html")).catch((err) => {
      res.status(400).json(err);
    });
  });

  // Redundant/catch all routes to index.html
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html")).catch((err) => {
      res.status(400).json(err);
    });
  });
};
