const Users= require('../controllers/auth');
const Doctors = require('../models/patient');


exports.patientsData = (Users.authenticateToken, (req, res) => {
    res.json(Users.users.filter(user => user.userType === 'Patient'))
});