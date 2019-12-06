const assert = require('assert');
const UserPantry = require("../models/pantry")

describe('Saving records', function() {
   it('saves a record to the database', function(done) {
        var pantry = new UserPantry({
           ingredients: ['chicken', 'onion', 'mushroom']
        });
        pantry.save().then(function() {
           assert(pantry.isNew === false);
           done();
        }).catch(done);
   }).timeout(10000);
});

describe('Finding records', function() {
    beforeEach(function(done) {
        var pantry = new UserPantry({
            ingredients: ['chicken', 'onion', 'mushroom']
        });
        pantry.save().then(function() {
            done();
        }).catch(done);
    });

    it('finds one record from the database', function(done) {
        UserPantry.findOne({ingredients: ['chicken', 'onion', 'mushroom']}).then(function(result) {
            console.log(result.ingredients)
            assert(result.ingredients == ["chicken", "onion", "mushroom"]);
            done();
        });
    });
});