var Promise = require('bluebird').Promise;
var db = require('../db');
var query = Promise.promisify(db.query, {context: db});
var insert = Promise.promisify(db.insert, {context: db});

module.exports = {
  signup: {
    post: function(data) {
      //check database for existing username
        //if username is available add to our database
        //if username is unavailable send status back to controller
      query()
    }
  },
  
  login: {
    post: function(data) {
      
    }
  },
  
  itinerary: {
    get: function(data) {
     
    },
    post: function(data) {

    },
    put: function(data) {
 
    },
    delete: function(data) {
 
    }
  },

  list: {
    get: function() {

    }
  },

  api: {
    yelp: function(data) {

    },
    map: function(data) {

    }
  }
}
