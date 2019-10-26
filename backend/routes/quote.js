const express = require("express");
const router = express.Router();
const Quote = require("../models/quote.js");
const Project = require("../models/project.js");

const mongoose = require("mongoose");

router.post("/quotes/create", (req, res) => {
  console.log(req.body.projectId);
  Quote.create({
    // professional: mongoose.Types.ObjectId(req.session.currentProfessional._id),
    professional: mongoose.Types.ObjectId(req.body.userId),
    project: mongoose.Types.ObjectId(req.body.projectId),
    hourlyPrice: req.body.hourlyPrice,
    description: req.body.description
  })
    .then(quote => {
      Project.findByIdAndUpdate(
        req.body.projectId,
        { $push: { quotes: quote._id } },
        { new: true }
      )
        .then(res => {
          console.log('it worked!')
          res.send(quote);
        })
        .catch(err => {
        });
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
