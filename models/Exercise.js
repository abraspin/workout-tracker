const mongoose = require("mongoose");

// const Schema = mongoose.Schema;
// const exerciseSchema = new Schema({

const exerciseSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  distance: {
    type: Number,
  },
  duration: {
    type: Number,
  },
});

// TODO: here add exerciseSchema.methods.<function> () {}

// compile exercise schema into a model
const exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = exercise;
