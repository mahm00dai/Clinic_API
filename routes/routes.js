const express = require('express');

const Users= require('../controllers/auth');
const Doctors = require('../controllers/doctors');
const Patients = require('../controllers/patients');
const Admins = require('../controllers/admins');

const router = express.Router();



router.get('/doctors', Doctors.doctorsData);

router.get('/doctors/:doctorID', Doctors.getDoctor);

router.get(' /doctors/:doctorId/slots', Doctors.getDoctor);

router.get('/patients', Patients.patientsData);

router.get('/admins', Admins.adminsData);

router.post('/register', Users.addUser);

router.post('/login', Users.login);

router.post('/token', Users.returnToken);

router.delete('/logout', Users.logout);


module.exports = router;