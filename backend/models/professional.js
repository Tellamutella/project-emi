const mongoose = require('mongoose');

const professionalSchema = new mongoose.Schema({
    password: {
        type: String,
        // require: true
    },
    firstName: {
        type: String,
        // require: true
    },
    lastName: {
        type: String,
        // require: true
    },
    email: {
        type: String,
        // require: true
    },
    mobile: {
        type: String,
        // require: true
    },
    image: {
        type: String,
        // require: true
    }
},
    { timestamps: true }
)

const Professional = mongoose.model('professional', professionalSchema);

module.exports = Professional;