const db = require("../models");
const mongoose = require("mongoose");

module.exports = function(app) {
    app.get("/api/workouts", (req, res)=>{
        db.Workout.find()
        .then(dbWorkout =>{
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(req.params.user_id, {$set:req.body}, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log("Result: " + result);
            res.send('Finished')
        })
    })
}

