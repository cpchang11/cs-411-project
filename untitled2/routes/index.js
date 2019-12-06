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

router.get('/api', async (request, response) => {
  /*const ing = request.params.ingredient;
  console.log(ing); */
  const api_url = `https://api.spoonacular.com/recipes/search?apiKey=2bbdc39afe8e4dadaf483cc3a8d299a0&query=chicken`;
  /*const api_url = `https://api.spoonacular.com/recipes/search?apiKey=2bbdc39afe8e4dadaf483cc3a8d299a0&query=${ingredient}`; */
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
});

router.get('/recipes', async (request, response) => {
  UserPantry.findOne({ingredients: ''}).then(function(result) {
      var listOfIngredients = result.ingredients;
      result.save().then(result => {
          console.log('ingredient saved to database')
          response.redirect('/')
      }).catch(err => {
          response.status(400).send('unable to save to database');
      });
      var options = { method: 'GET',
        url: 'https://api.spoonacular.com/recipes/findByIngredients',
        qs:
          { apiKey: '53f17f65971c40d3af01d4908d1f823e',
            ingredients: listOfIngredients,
            number: '10' },
        headers:
          { 'cache-control': 'no-cache',
            Connection: 'keep-alive',
            'Accept-Encoding': 'gzip, deflate',
            Host: 'api.spoonacular.com',
            'Postman-Token': 'b7ceb67c-f19c-4fa2-b5c7-8cccbb871ba8,51bd9b2d-18c0-497d-a214-8206326a40b4',
            'Cache-Control': 'no-cache',
            Accept: '/',
            'User-Agent': 'PostmanRuntime/7.18.0' },
        json: true  };
    const request = require("request");
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
        //response.json(body);
        console.log(body);
    });
   // const api_url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=226d380f84e98440d8848bfb57144a69d&ingredients=${listOfIngredients}&number=10`;
   // const fetch_response = await fetch(api_url);
   // const json = await fetch_response.json();
   // const recipeResults = json.results[1];
   // response.json(recipeResults);
  });
});

module.exports = router;
