// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     userType: {
//         type: String,
//         required: true
//     },
//     fullName: {
//         type: String,
//         required: true
//     },
//     gender: {
//         type: String,
//         required: false
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// })



// module.exports = mongoose.model('User', userSchema);









// // const getDB = require('../util/database').getDB;

// // class User {
// //     constructor(userType, fullName, gender, email, password) {
// //         this.userType = userType,
// //         this.fullName = fullName,
// //         this.gender = gender, 
// //         this.email = email,
// //         this.password = password
// //     };

// //     save() {
// //         const db = getDB();
// //         return db.collection('users')
// //             .insertOne(this)
// //             .then(result => {
// //                 console.log(result);
// //             })
// //             .catch(err => {
// //                 console.log(err);
// //             });
// //     };

// //     static login(userEmail) {
// //         const db = getDB();
// //         return db
// //             .collection('users')
// //             .find({email: userEmail})
// //             .next()
// //             .then(user => {
// //                 console.log(user);
// //                 return user;
// //             })
// //             .catch(err => {
// //                 console.log(err);
// //             });
// //     };

// //     static hashedPass(userEmail) {
// //         const db = getDB();
// //         return db
// //             .collection('users')
// //             .find({email: userEmail})
// //             .next()
// //             .then(user => {
// //                 return user.password;
// //             })
// //             .catch(err => {
// //                 console.log(err);
// //             });
// //     };

// //     static fetchAll() {
// //         const db = getDB();
// //         return db
// //             .collection('users')
// //             .find()
// //             .toArray()
// //             .then(doctors => {
// //                 console.log(doctors);
// //                 return doctors;
// //             })
// //             .catch(err => {
// //                 console.log(err);
// //             });
// //     };
// // }

// // module.exports = User;