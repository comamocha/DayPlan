var model = require('./model.js');
var bluebird = require('bluebird');

module.exports = {
  signup: {
    get: function(req, res) {
      res.redirect('/signup.html'); /* REDIRECT if static page; RENDER if new view */
    },
    post: function(req, res) {
      model.signup.post(req.body).then(/**/)
    }
  },
  
  login: {
    get: function(req, res) {
      res.redirect('../Client/login.html'); /* REDIRECT if static page; RENDER if new view */
    },
    post: function(req, res) {
      res.statusCode = 200;
      res.send(model.login.permitLogin(req.query));
    }
  },
  
  itinerary: {
    get: function(req, res) {
      model.itinerary.get();      
    },
    post: function(req, res) {
      model.itinerary.post();
    },
    put: function(req, res) {
      model.itinerary.put();   
    },
    delete: function(req, res) {
      model.itinerary.delete();
    }
  },

  list: {
    post: function(req, res) {
      console.log('**********************inside list.post controller********************\n');
      model.list.post();
    }
  },

  api: {
    AutocompleteYelp: function (req, res) {
      console.log("Trying to work on a  AutocompleteYelp call.");
      var query = req.query.search; //Parses the url yelp?search=deli
      model.api.yelp.AutocompleteYelp(query, req, res);
    },
    ReviewsYelp: function (req, res) {
      console.log("Trying to work on a  AutocompleteYelp call.");
      var query = req.query.search; //Parses the url ReviewsYelp?search=deli
      model.api.yelp.ReviewsYelp(query, req, res);
    },
    BusinessYelp: function (req, res) {
      console.log("Trying to work on a  BusinessYelp call.");
      
      var query = req.query; //Parses the url BusinessYelp?search=?13028373
      model.api.yelp.BusinessYelp(query, req, res);
    },
    PhoneSearchYelp: function (req, res) {
      console.log("Trying to work on a  PhoneSearchYelp call.");
      var query = req.query.search; //Parses the url PhoneSearchYelp?search=?13028373
      model.api.yelp.PhoneSearchYelp(query, req, res);
    },
    getAuth2Token: function (req, res) {
      console.log("Trying to work on a  PhoneSearchYelp call.");
      var query = req.query.search; //Parses the url getAuth2Token?search=?13028373
      model.api.yelp.getAuth2Token(query, req, res);
    },
    map: function (req, res) {
      model.api.map();
    }
  }
}