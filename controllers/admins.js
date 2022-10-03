const Users= require('../controllers/auth');

exports.adminsData = (Users.authenticateToken, (req, res) => {
    res.json(Users.users.filter(user => user.userType === 'Admin'))
});