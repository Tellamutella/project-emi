const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Project = require("../models/project");
const Quote = require("../models/quote")

//POST route => to create a new project
router.post("/projects/create", (req, res, next) => {
  debugger
  Project.create({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    customer: mongoose.Types.ObjectId(req.body.customer)
  })
    .then(project => {
      console.log("project saved");
      res.json({ ...project });
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/projects", (req, res, next) => {
  Project.find()
    .then(projects => {
      res.send(projects);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/projects/:projectId", (req, res, next) => {
  Project.findById(req.params.projectId)
    .populate("quotes")
    .then(project => {
      res.send(project);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/customer/projects/:projectId", (req, res, next) => {
  debugger
  Project.findById(req.params.projectId)
    .populate({
      path: 'quotes',
      populate: {
        path: 'professional'
      }
    })
    .then(project => {
      debugger
      res.send(project);
    })
    .catch(err => {
      res.send(err);
    });
})

module.exports = router;
