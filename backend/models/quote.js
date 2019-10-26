
const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    professional: {
        type: mongoose.Types.ObjectId,
        ref: 'professional'
    },
    project: {
        type: mongoose.Types.ObjectId,
        ref: 'project'
    },
    hourlyPrice: {
        type: String,
    },
    description: {
        type: String,
    }
}
)

const Quote = mongoose.model("quote", quoteSchema);

module.exports = Quote;