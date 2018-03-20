var express = require('express');
var app = express();
var path = require('path');
var engines = require('consolidate');
var bodyParser = require('body-parser');
var assert = require('assert');
const { ObjectID } = require('mongodb');
const { mongoose } = require('./db/db');
const { Room } = require('./models/Room');
const { User } = require('./models/User');
const MongoClient = require('mongodb').MongoClient;


var db;

// Handler for internal server errors
function errorHandler(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    //res.status(500).render('error_template.html', { error: err });
}

// viewed at http://localhost:8080
console.log(__dirname);
app.use(express.static(path.join(__dirname, '/view')));
app.engine('html', engines.ejs);
app.set('view engine', 'html');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

MongoClient.connect('mongodb://admin:YDAUDXSAYQKTKTSD@sl-us-south-1-portal.15.dblayer.com:36486,sl-us-south-1-portal.17.dblayer.com:36486/compose?authSource=admin&ssl=true',
                     function(err, database) {
    assert.equal(null, err);
    console.log("Successfully connected to MongoDB.");
    const db = database.db('CS4471');


    app.use(errorHandler);

  app.listen(8080, () => {
    console.log( 'listening on localhost:8080');
    });
});

app.get('/', (re1,res) => {
    res.render("random.html");
})
