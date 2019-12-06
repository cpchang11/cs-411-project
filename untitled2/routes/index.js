var express = require('express');
var passport = require('passport')
var router = express.Router();
const request = require("request");
var rp = require('request-promise');
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const UserPantry = require("../models/pantry")

//var bodyParser = require('body-parser');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api', async (request, response) => {
  if(typeof request.body.ingredient === 'undefined'){
    // The parameter is missing, example response...
    res.status(400).json({ error: 'missing parameter ingredient', data: null }); // Only an  example
    return;
  }
  const ing = request.body.ingredient;
  console.log(ing);
  const api_url = `https://api.spoonacular.com/recipes/search?apiKey=2bbdc39afe8e4dadaf483cc3a8d299a0&query=${ing}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  const first_recipe = json.results[1];
  response.json(first_recipe);
});

router.post('/saveing', async (request, response) => {
  if(typeof request.body.pantry === 'undefined'){
    // The parameter is missing, example response...
    response.status(400).json({ error: 'missing parameter ingredient', data: null }); // Only an  example
    return;
  }
  var newIngredient = request.body.pantry;
  UserPantry.findOne({ingredients: ''}).then(function(result) {
    console.log(result.ingredients);
    result.ingredients.push(newIngredient);
    result.save().then( result => {
      console.log('ingredient saved to database')
      response.redirect('/')
    }).catch(err => {
      response.status(400).send('unable to save to database');
    });
  });
});

router.get('/recipes', async (request, response) => {
        //UserPantry.findOne({ingredients: ''}).then(function(result)
        const api_url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=53f17f65971c40d3af01d4908d1f823e&${idk}&number=10`;
        const fetch_response = await fetch(api_url);
        const json = await fetch_response.json();
        const first_recipe = json;
        response.json(first_recipe);
});

router.get('/spotify', async (request, response) => {
    const api_url = `https://api.spotify.com/v1/playlists/37i9dQZF1DX9tPFwDMOaN1`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    const playlist = json;
    response.json(playlist);
});
module.exports = router;
