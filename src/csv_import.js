var MongoClient = require('mongodb').MongoClient;
var async = require('async');
var Course = require('/db/Course');



  var csv = []; // build the csv into an array...
  // putting the data into the 'test' database:
  MongoClient.connect('ds155278.mlab.com:55278/4471', function(err, db) {
    if(err) throw err;

    var collection = db.collection('Courses');
    async.every(csv, function(row, callback) {

       // build the csv row into an object literal
    //    var data = { Course.code: CourseCode }; // make this fit your data correctly
       collection.insert(data, function(err, docs) {
          // signal that this row is done inserting
          // by calling the callback passed with every row
          callback(err);
       });
    }, function() {
        // all rows have been inserted, so close the db connection
        db.close();
    });
  })