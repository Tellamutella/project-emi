const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const Professional = require('../../models/professional')


router.post("/professional/signup", (req, res, next) => {
    const { email, password, firstName, lastName, mobile } = req.body;

    const bcryptSalt = 10;
    Professional.findOne({ email })
        .then((user) => {
            if (user) res.send("You already have an account with this email");
            else {
                bcrypt.hash(password, bcryptSalt, function (err, hash) {
                    if (err) {
                        res.send(err.message);
                    } else {
                        Professional.create({
                            email: email,
                            password: hash,
                            firstName: firstName,
                            lastName: lastName,
                            mobile: mobile
                        })
                            .then((result) => {
                                // console.log("User created!" + result);
                                // res.send("")
                            })
                            .catch((err) => {
                                res.send(err);
                            })
                    }
                })
            }
        })
        .catch((err) => {
            res.send(err);
        })
})

router.post("/professional/login", (req, res, next) => {
    Professional.findOne({ email: req.body.email })
        .then(professional => {
            if (!professional) {
                console.log("email or password incorrect");
            } else {
                bcrypt.compare(req.body.password, professional.password, function (err, equal) {
                    if (err) {
                        console.log(err);
                    } else if (!equal) {
                        console.log("email or passweord incorrect")
                    } else {
                        req.session.currentProfessional = professional;
                        console.log("you're logged in!");
                    }
                })
            }
        })
        .catch((err) => {
            res.send(err)
        })
})

router.get("/logout", (req, res) => {
    req.session.destroy();
    console.log("logged out")
})

module.exports = router;