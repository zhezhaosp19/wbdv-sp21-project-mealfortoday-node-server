const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/project-db',
    {useNewUrlParser: true, useUnifiedTopology: true})


//Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});


require('./controllers/demos.controller')(app)
require('./controllers/user-controller')(app)
require('./controllers/recipes-controller')(app)

app.listen(4000)