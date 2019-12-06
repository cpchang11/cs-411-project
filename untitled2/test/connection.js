const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the db before tests run
before(function(done) {
    // Connect to mongodb
    mongoose.connect('mongodb://localhost/test');
    mongoose.connection.once('open', function () {
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', function(error){
        console.log('Connection error:', error);
    });
});

// Drop the pantry collection before each test
beforeEach(function(done) {
   // Drop the collection
    mongoose.connection.collections.userpantries.drop(function() {
        done();
    })
});