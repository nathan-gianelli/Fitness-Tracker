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
        db.Workout.findByIdAndUpdate({_id:req.params.id}, {$push:{exercises:req.body}})
            .then (dbWorkout =>{
                res.json(dbWorkout)
            })
            .catch(err =>{
                res.json(err)
            })
    })

    app.get("/api/workouts/range", (req, res)=>{
        db.Workout.find()
        .then(dbWorkout =>{
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
        
    });

    app.post("/api/workouts", (req, res)=>{
        db.Workout.create(req.body)
        .then(dbWorkout =>{
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    })
}

