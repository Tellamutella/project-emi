const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Project = require('../models/project')

//POST route => to create a new project
router.post('/projects/create', (req, res, next) => {

    Project.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        customer: mongoose.Types.ObjectId(req.session.currentCustomer._id),
    })
        .then((res) => {
            console.log('project saved')
            // res.json(res);
        })
        .catch((err) => {
            res.json(err);
        })
})

router.get('/projects', (req, res, next) => {
    Project.find()
        .then((projects) => {
            res.send(projects)
            console.log(projects)
        })
        .catch((err) => {
            res.send(err)
        })
})


module.exports = router;
