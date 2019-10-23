const express = require('express');
const router = express.Router();
const Quote = require("../models/quote.js")

const mongoose = require("mongoose");

router.post("/quotes/create", (req, res) => {
    debugger
    Quote.create({
        // professional: mongoose.Types.ObjectId(req.session.currentProfessional._id),
        professional: mongoose.Types.ObjectId(req.body.professional),
        project: mongoose.Types.ObjectId(req.body.projectId),
        hourlyPrice: req.body.hourlyPrice,
        description: req.body.description
    })
        .then((quote) => {
            res.send(quote)
            console.log(quote)
        })
        .catch((err) => {
            res.send(err);
        })
})


module.exports = router;