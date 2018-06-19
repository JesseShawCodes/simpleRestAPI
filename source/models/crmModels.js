const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
    },
    company: {
        type: String,
    },
    phone: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = ContactSchema