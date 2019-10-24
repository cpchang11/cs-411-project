var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

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

router.get('/api', async (request, response) => {
  /*const ing = request.params.ingredient;
  console.log(ing); */
  const api_url = `https://api.spoonacular.com/recipes/search?apiKey=2bbdc39afe8e4dadaf483cc3a8d299a0&query=chicken`;
  /*const api_url = `https://api.spoonacular.com/recipes/search?apiKey=2bbdc39afe8e4dadaf483cc3a8d299a0&query=${ingredient}`; */
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
});

module.exports = router;
