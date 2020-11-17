const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
  },
  //   value: {
  //     type: Number,
  //     required: "Enter an amount",
  //   },
  //   date: {
  //     type: Date,
  //     default: Date.now,
  //   },
});

//export workout model built from schema? (name, schema)
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
