const router = require("express").Router();
const Workout = require("../models/workoutModel");

router.get("/api/workouts", ({body}, res) => {
  Workout.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/", ({body}, res) => {
    Workout.create(body)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ date: -1 }).limit(7)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
