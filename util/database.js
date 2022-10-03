// const mongoClient = mongodb.MongoClient;

// let _db;
// const mongoConnect = callback => {
//     mongoClient.connect('mongodb+srv://clinic_admin:ClinC_Admin_123@mern.s8yk7.mongodb.net/?retryWrites=true&w=majority'
//     )
//         .then(client => {
//             console.log('DataBase Connected !');
//             _db = client.db('Clinic');
//             callback();
//         })
//         .catch(err => {
//             console.log(err);
//             throw err;
//         });
// }

// const getDB = () => {
//     if (_db) {
//         return _db;
//     }
//     throw 'No DataBase Found !';

// };

// exports.mongoConnect = mongoConnect;
// exports.getDB = getDB;



