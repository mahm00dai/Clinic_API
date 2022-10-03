const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    userType: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model('Admin', adminSchema);