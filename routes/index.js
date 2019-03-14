var express = require('express');
var router = express.Router();

const data = require('../data');

/* GET home page. */
// get the rout and request to render the index with the title express
// index actually is index.hbs and the data that goes into it is coming from the route
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Your first Express App', message: 'Express is actually pretty easy once you figure a few things out.'});
});

// get a dynamic user via the route parameter
router.get('/:user', function(req, res, next) {
  console.log('user', req.params.user);
  res.render('userpage', data[req.params.user]);
});

module.exports = router;
