var mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  password: {
    type: String
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  },
  image: {
    type: String
  },
  mobile: {
    type: String
  }
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
