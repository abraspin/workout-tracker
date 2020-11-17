const router = require("express").Router();
const db = require("../models");

//exporting  api routes
module.exports = (app) => {
  //
  //GET ALL WORKOUTS
  app.get("/api/transaction", (req, res) => {
    db.find({})
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  // POST A NEW WORKOUT
  router.post("/api/workouts", ({ body }, res) => {
    router
      .create(body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};
