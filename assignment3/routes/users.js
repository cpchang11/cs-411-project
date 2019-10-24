var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var request = require("request");

var options = { method: 'GET',
  url: 'https://api.spoonacular.com/recipes/search',
  qs: { apiKey: 'b7d6ef59b34e4ee1b57daa921dbf6908', query: 'chicken' },
  headers:
      { 'cache-control': 'no-cache',
        Connection: 'keep-alive',
        'Accept-Encoding': 'gzip, deflate',
        Host: 'api.spoonacular.com',
        'Postman-Token': '028c30f9-b79e-4be5-be66-8c8278d85b2d,ffe135e3-3d7b-4c91-a4c1-1d0be021a98c',
        'Cache-Control': 'no-cache',
        Accept: '*/*',
        'User-Agent': 'PostmanRuntime/7.18.0' }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});

router.get('/', (req, res) => {
  rp({
    uri: 'https://api.spoonacular.com/recipes/search',
    qs: {
      query: 'chicken',
      apiKey: 'b7d6ef59b34e4ee1b57daa921dbf6908'
      // Use your accuweather API key here
    },
    json: true
  })
      .then((data) => {
        res.render('index', data)
      })
      .catch((err) => {
        console.log(err)
        res.render('error')
      })
});




module.exports = router;