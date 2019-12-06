const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const PantrySchema = new Schema({
    ingredients: [String]
});

const UserPantry = mongoose.model('UserPantry', PantrySchema);

module.exports = UserPantry;