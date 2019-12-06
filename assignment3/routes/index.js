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


router.get('/api', async (request, response) => {
  var playlistID = "";
  const cuisineName = request.body.cuisines; 

  if (cuisineName = "African")
  {
    playlistID = "37i9dQZEVXbMH2jvi6jvjk";  
  }
  if (cuisineName = "American")
  {
    playlistID = "37i9dQZEVXbLRQDuF5jeBp";
  }
  if (cuisineName = "British")
  {
    playlistID = "6POgRkMqqAScEncQQF3OWo";
  }
  if (cuisineName = "Cajun")
  {
    playlistID = "2KmefvmYGgMH8fvkHLWHse";
  }
  if (cuisineName = "Caribbean")
  {
    playlistID = "1m3tG3nrS5iNB8BEG6B4IT";
  }
  if (cuisineName = "Chinese")
  {
    playlistID = "3dtU7mRvUByjsR0p7IfrEg";
  }
  if (cuisineName = "Eastern European")
  {
    playlistID = "2Kltck0I6zDePUAG8RYBxs";
  }
  if (cuisineName = "European")
  {
    playlistID = "19RAb34RkjlayagyBiTsJV";
  }
  if (cuisineName = "French")
  {
    playlistID = "37i9dQZEVXbIPWwFssbupI";
  }
  if (cuisineName = "German")
  {
    playlistID = "37i9dQZEVXbJiZcmkrIHGU";
  }
  if (cuisineName = "Greek")
  {
    playlistID = "37i9dQZEVXbJqdarpmTJDL";
  }
  if (cuisineName = "Indian")
  {
    playlistID = "37i9dQZEVXbLZ52XmnySJg";
  }
  if (cuisineName = "Irish")
  {
    playlistID = "37i9dQZEVXbKM896FDX8L1";
  }
  if (cuisineName = "Italian")
  {
    playlistID = "37i9dQZEVXbIQnj7RRhdSX";
  }
  if (cuisineName = "Japanese")
  {
    playlistID = "37i9dQZEVXbKXQ4mDTEBXq";
  }
  if (cuisineName = "Jewish")
  {
    playlistID = "6mr1V7Fff6S512YvwnBqwm";
  }
  if (cuisineName = "Korean")
  {
    playlistID = "37i9dQZF1DX9tPFwDMOaN1";
  }
  if (cuisineName = "Latin American")
  {
    playlistID = "37i9dQZF1DX10zKzsJ2jva";
  }
  if (cuisineName = "Mediterranean")
  {
    playlistID = "3pS1vZCG1Xu2h2yFGWoqol";
  }
  if (cuisineName = "Mexican")
  {
    playlistID = "37i9dQZEVXbO3qyFxbkOE1";
  }
  if (cuisineName = "Middle Eastern")
  {
    playlistID = "5E7yzLgfs3WyEtvJtjmLPA";
  }
  if (cuisineName = "Nordic")
  {
    playlistID = "4r2twUYtviwpCpFnrfkkgM";
  }
  if (cuisineName = "Southern")
  {
    playlistID = "37i9dQZF1DXbDjX0hus3Iu";
  }
  if (cuisineName = "Spanish")
  {
    playlistID = "37i9dQZEVXbNFJfN1Vw8d9";
  }
  if (cuisineName = "Thai")
  {
    playlistID = "37i9dQZEVXbMnz8KIWsvf9";
  }
  if (cuisineName = "Vietnamese")
  {
    playlistID = "37i9dQZEVXbLdGSmz6xilI";
  }






});

module.exports = router;
