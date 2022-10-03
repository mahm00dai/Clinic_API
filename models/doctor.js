const { time } = require('console');
const mongoose = require('mongoose');
const patient = require('./patient');
const Patient = require('./patient');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
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
    reservations: {
        slots: [{
            patient: {
                type: Schema.Types.ObjectId,
                ref: 'Patient',
                required: false
            },
            startTime: {
                type: Date,
                required: true
            },
            endTime: {
                type: Date,
                required: true
            }
        }]
    }
})



module.exports = mongoose.model('Doctor', doctorSchema);















// const getDB = require('../util/database').getDB;
// const userClass = require('./user');

// class Doctor extends userClass{
//     constructor(userType, speciality, fullName, gender, email, password) {
//         super(userType, fullName, gender, email, password);
//         this.speciality = speciality
//     };

//     save() {
//         const db = getDB();
//         return db.collection('doctors')
//             .insertOne(this)
//             .then(result => {
//                 console.log(result);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     };

//     static fetchAll() {
//         const db = getDB();
//         return db
//             .collection('doctors')
//             .find()
//             .toArray()
//             .then(doctors => {
//                 console.log(doctors);
//                 return doctors;
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     };
// }

// module.exports = Doctor;