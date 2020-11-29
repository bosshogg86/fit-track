const router = require("express").Router();
const Workout = require("../models/workoutSchema");

// getLastWorkout route
router.get("/api/workouts", (_req, res) => {
  Workout.find()
    .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// getWorkoutsInRange route
router.get("/api/workouts/range", (_req, res) => {
  Workout.find()
    .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// addExercise route
router.put("/api/workouts/:id", ({ body }, res) => {
  Workout.create({
    day: new Date().setDate(new Date().getDate() - 10),
    exercises: [body],
  })
    .then((dbWorkout) => {
      res.json(dbWorkout);
      console.log(`Workout created: ${body}`);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  console.log(`Exercise added:${body}`);
});

// createWorkout route
router.post("/api/workouts", ({ body }, res) => {
  Workout.create({
    day: new Date().setDate(new Date().getDate() - 10),
    exercises: [body],
  })
    .then((dbWorkout) => {
      res.json(dbWorkout);
      console.log(`Workout created: ${body}`);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
