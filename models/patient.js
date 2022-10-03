const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
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
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
        required: false
      }
})



module.exports = mongoose.model('Patient', patientSchema);