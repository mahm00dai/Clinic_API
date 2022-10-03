require('dotenv').config()

const express = require('express');
const Routes = require('./routes/routes');
// const Mongo = require('./util/database');
const mongoose = require('mongoose');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(Routes);



app.get('/register', (req, res, next) => {
    res.send();
})


app.use((req, res, next) => {
    res.status(404);
});


mongoose
    .connect('mongodb+srv://clinic_admin:ClinC_Admin_123@mern.s8yk7.mongodb.net/Clinic?retryWrites=true&w=majority')
    .then(result => {
        console.log('DataBase Connected !')
        app.listen(
            PORT,
            () => console.log(`Server is alive on http://localhost:${PORT}`)
        )
    });

