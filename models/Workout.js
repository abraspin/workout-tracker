const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type Required",
      },
      name: {
        type: String,
        trim: true,
        required: "Name Required",
      },
      duration: {
        type: Number,
        required: "Duration Required (minutes)",
      },
      weight: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

// compile workout schema into a model
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
