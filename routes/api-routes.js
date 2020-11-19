const db = require("../models");

//exporting  api routes
module.exports = function (app) {
  //
  //GET ALL WORKOUTS
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  //
  //GET ALL WORKOUTS with range
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  // EDIT A WORKOUT (AKA ADD AN EXERCISE TO IT)
  app.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
      {
        _id: params.id,
      },
      {
        $push: {
          exercises: body,
        },
      }
    )
      .then((updatedWorkout) => {
        res.json(updatedWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  // POST A NEW WORKOUT
  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  //
};
