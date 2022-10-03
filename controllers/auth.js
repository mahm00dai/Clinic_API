const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const User = require('../models/user');
const Admin= require('../models/admin');
const Doctor= require('../models/doctor');
const Patient= require('../models/patient');

// const users = [];
let refreshTokens = []

const generateAccessToken = (user) => {
    return jwt.sign({user}, process.env.ACCESS_TOKEN, { expiresIn: '5m' })
}

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null)
        return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        console.log(err)
        if (err)
            return res.sendStatus(403)

        req.user = user
        next()
    })
}

exports.addUser = async (req, res, next) => {
    try {
        let user;

        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        
        const userType= req.body.userType;
        const fullName= req.body.fullName;
        const gender= req.body.gender;
        const email= req.body.email;
        const password= hashedPassword;

        
        if(userType === 'Admin'){
            user = new Admin({
                userType: userType, 
                fullName: fullName, 
                gender: gender, 
                email: email, 
                password: password
            });
        };
        if(userType === 'Doctor'){
            // const reserv = {
            //     slots: [{
            //         patient: req.patient,
            //         startTime: '2022-10-01T19:00:00Z',
            //         endTime: '2022-10-01T19:30:00Z',
            //     }]
            // }
            console.log(reserv);

            user = new Doctor({
                userType: userType, 
                fullName: fullName, 
                gender: gender, 
                email: email, 
                password: password,
                // reservations: reserv
            });
        }
        if(userType === 'Patient'){
            user = new Patient({
                userType: userType, 
                fullName: fullName, 
                gender: gender, 
                email: email, 
                password: password
            })    
        }

        user.save().then(console.log('User Added !'));
        
        res.status(201).send('Account Created')
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error')
    }
};

exports.login = async (req, res) => {
    let user;
    const userType = req.body.userType;
    
    if(userType === 'Admin') {user = await Admin.findOne({ email: req.body.email })};

    if(userType === 'Doctor') {user = await Doctor.findOne({ email: req.body.email })};

    if(userType === 'Patient') {user = await Patient.findOne({ email: req.body.email })};

    if (user == null) {return res.status(400).send('User Does Not Exist !')};

    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign({user}, process.env.REFRESH_TOKEN)
    refreshTokens.push(refreshToken)

    try {
        if(await bcrypt.compare(req.body.password, user.password))
            res.json({ user, accessToken: accessToken, refreshToken: refreshToken });
        else 
            res.send('Not Allowed')
        
    } catch (err){
        console.log(err);
        res.status(500).send()
    }
};

exports.logout = (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
};

exports.returnToken = (req, res) => {
    const refreshToken = req.body.token

    if (refreshToken == null)
        return res.sendStatus(401)

    if (!refreshTokens.includes(refreshToken))
        return res.sendStatus(403)

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) => {
        if (err)
            return res.sendStatus(403)
        const accessToken = generateAccessToken({ name: user.name })
        res.json({ accessToken: accessToken })
    })
};

// exports.users = users;
exports.authenticateToken = authenticateToken;
exports.generateAccessToken = generateAccessToken;





// exports.addUser = async (req, res, next) => {
//     try {
//         let user;

//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
        
//         const userType= req.body.userType;
//         const fullName= req.body.fullName;
//         const gender= req.body.gender;
//         const email= req.body.email;
//         const password= hashedPassword;

        
//         if(userType === 'Admin'){
//             Admin.findOne({ email: email })
//                 .then(userDoc => {
//                     if (userDoc) {
//                         return res.send('This Email Is Used Before !');
//                     }
//                 user = new Admin({
//                     userType: userType, 
//                     fullName: fullName, 
//                     gender: gender, 
//                     email: email, 
//                     password: password
//                 });
//             });
//         };

//         if(userType === 'Doctor'){
//             const reserv = {
//                 slots: [{
//                     patient: req.patient,
//                     startTime: '2022-10-01T19:00:00Z',
//                     endTime: '2022-10-01T19:30:00Z',
//                 }]
//             }
//             console.log(reserv);

//             Doctor.findOne({ email: email })
//             .then(userDoc => {
//                 if (userDoc) {
//                     return res.send('This Email Is Used Before !');
//                 }            
//                 user = new Doctor({
//                     userType: userType, 
//                     fullName: fullName, 
//                     gender: gender, 
//                     email: email, 
//                     password: password,
//                     reservations: reserv
//                 });
//             });
//         }

//         if(userType === 'Patient'){
//             Patient.findOne({ email: email })
//                 .then(userDoc => {
//                     if (userDoc) {
//                         return res.send('This Email Is Used Before !');
//                     }
//                 user = new Patient({
//                     userType: userType, 
//                     fullName: fullName, 
//                     gender: gender, 
//                     email: email, 
//                     password: password
//                 });
//             });
//         }

//         user.save().then(console.log('User Added !'));
//         res.status(201).send('Account Created')
        
//     } catch(err) {
//         console.log(err);
//         res.status(500).send('Internal Server Error')
//     }
// };