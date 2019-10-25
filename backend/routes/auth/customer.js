const express = require("express");
const router = express.Router();
const Customer = require("../../models/customer");
const bcrypt = require("bcrypt");

router.post("/customer/signup", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const mobile = req.body.mobile;

  Customer.findOne({ email: email })
    .then(customer => {
      if (customer) {
        res.send("email already taken");
      } else {
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            res.send(err.message);
          } else {
            Customer.create({
              email: email,
              password: hash,
              firstname: firstname,
              lastname: lastname,
              mobile: mobile
            })
              .then(user => {
                res.send({ user });
              })
              .catch(err => {
                res.send(err);
              });
          }
        });
      }
    })
    .catch(error => {
      res.send(err);
    });
});

router.post("/customer/login", (req, res, next) => {
  const email = req.body.email;
  Customer.findOne({ email })
    .then(customer => {
      if (customer) {
        bcrypt.compare(req.body.password, customer.password,
          (error, equal) => {
            if (equal) {
              let { email, firstname, lastname, id } = customer;
              let sessionData = { email, firstname, lastname, id };
              req.session.customer = sessionData;
              console.log("you're logged in!")
              res.json(sessionData)
            } else if (!equal) {
              console.log("email or password incorrect!")
            } else {
              console.log(error)
            }
            // if (error) {
            //   res.send(error);
            // } else if (response) {
            //   req.session.currentCustomer = customer;
            //   console.log("customer logged in!");
            //   res.send({ customer });
            // } else {
            //   console.log(`username or password incorrect`);
            // }
          });
      }
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
