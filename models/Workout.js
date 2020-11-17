const mongoose = require("mongoose");

// const Schema = mongoose.Schema;
// const WorkoutSchema = new Schema({

const workoutSchema = new mongoose.Schema({
  day: {
    type: Date,
  },
  exercises: { type: Array },
});

// TODO: here add workoutSchema.methods.<function> () {}

// compile workout schema into a model
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
