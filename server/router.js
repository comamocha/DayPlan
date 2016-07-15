var router = require('express').Router();
var controller = require('./controller.js');

router.get('/signup', controller.signup.get);
router.post('/signup', controller.signup.post);

router.get('/login', controller.login.get);
router.post('/login', controller.login.post);

//Change itinerary in itinerary component view
router.get('/itinerary', controller.itinerary.get);
router.post('/itinerary', controller.itinerary.post);
router.put('/itinerary', controller.itinerary.put);
router.delete('/itinerary', controller.itinerary.delete);

//Itinerary List updates on load and any change to itinerary
router.get('/list', controller.list.get);

//API Calls
router.get('/yelp', controller.api.yelp);
router.get('/map', controller.api.map);

module.exports = router;