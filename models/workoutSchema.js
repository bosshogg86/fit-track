const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          required: "Enter a type for the exercise.",
        },
        name: {
          type: String,
          required: "Enter a name for the exercise.",
        },
        duration: {
          type: Number,
          required: "Enter a duration for the exercise.",
        },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
      },
    ],
  },
  opts
);

workoutSchema.virtual("totalDuration").get(function () {
  let totalDuration = 0;
  for (i = 0; i < this.exercises.length; i++) {
    totalDuration += this.exercises[i].duration;
  }
  return totalDuration;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
