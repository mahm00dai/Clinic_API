const Users= require('../controllers/auth');
const Doctors = require('../models/doctor');

exports.doctorsData = (Users.authenticateToken, (req, res) => {
    Doctors.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});


exports.getDoctor = (Users.authenticateToken, (req, res) => {
    const docID = req.params.doctorID;
    console.log(docID);

    Doctors.findById(docID)
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
});


exports.doctorSlots = (Users.authenticateToken, (req, res) => {
    
})