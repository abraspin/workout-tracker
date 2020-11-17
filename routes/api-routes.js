const db = require("../models");

//exporting  api routes
module.exports = function (app) {
  //
  //GET ALL WORKOUTS
  app.get("/api/workouts", (req, res) => {
    db.find({})
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  // POST A NEW WORKOUT
  app.post("/api/workouts", ({ body }, res) => {
    app
      .create(body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};
