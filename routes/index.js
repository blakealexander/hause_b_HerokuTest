var express = require('express');
var router = express.Router();

/* GET home page. */
// get the rout and request to render the index with the title express
// index actually is index.hbs and the data that goes into it is coming from the route
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Your first Express App', message: 'Express is actually pretty easy once you figure a few things out.'});
});

module.exports = router;
