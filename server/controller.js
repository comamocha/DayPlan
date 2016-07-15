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
    get: function(req, res) {
      model.list.get();
    }
  },

  api: {
    yelp: function(req, res) {
      model.api.yelp();
    },
    map: function(req, res) {
      model.api.map();
    }
  }
}