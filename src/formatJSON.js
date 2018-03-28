const { ObjectID } = require('mongodb');
const { mongoose } = require('./db/db');
const MongoClient = require('mongodb').MongoClient;
var express = require('express');
var app = express();
var path = require('path');
var engines = require('consolidate');
var bodyParser = require('body-parser');
var assert = require('assert');

const jsonObject = require('../scraper/data.json')
const Course = require('./models/Course');

let course = {};
let day = [];
var db;

MongoClient.connect('mongodb://admin:admin@ds155278.mlab.com:55278/4471',
                     function(err, database) {
    assert.equal(null, err);
    console.log("Successfully connected to MongoDB.");
    const db = database.db('CS4471');


    


    app.get('/', function(req, res, next) {
        for(var j = 0; j<=Object.keys(jsonObject).length; j++){
            console.log(Object.keys(jsonObject).length);
            console.log(j);
            let subjects = jsonObject[j];
            for (let classes in subjects){
            
                course.code = classes;
                
                let details = subjects[classes];
            
                for (element in details){
                    let lastArray = details[element];
                    for (var i =0; i<lastArray.length; i++){
            
                        if(i%12 === 0){
                            console.log('---------------------------')
                            course = {};
                            day = [];
                        }
                        
                        if(i%12 >= 1 && i%12 <= 5){ 
                            day.push(lastArray[i]);
                        }
                        if(i%12 === 6)
                            course.days = day;
                        if(i%12 === 9)
                            course.start = lastArray[i];
                        if(i%12 === 10)
                            course.end = lastArray[i];
                        
                        if(i%12 === 11){
                            course.code = classes;
                            course.location = lastArray[i];
                            db.collection('Courses').insertOne(
                                {
                                    'code': course.code, 'start': course.start, 'end': course.end, 'location':course.location, 'days': course.days
                                },
                                function(err, response){
                                    console.log('is this null?')
                                }
                            );
                            console.log(course);

                        }
                            
                    }
                }
    
            }
        }

    });
    app.listen(3000, () => {
        console.log( 'listening on localhost:3000');
    });
});

