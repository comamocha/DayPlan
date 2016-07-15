var Promise = require('bluebird').Promise;
var db = require('./db/dbHandler.js');
var query = Promise.promisify(db.query, {context: db});
var insert = Promise.promisify(db.insert, {context: db});

db.connect(function(error) {
  if (error) {
    throw error;
  }
  console.log('connection made! (yayyyy)');
});

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
    checkInfo: function(data) {
      query('SELECT password FROM Users WHERE Users.username = data.username')
        .then(function(pass) {
          if (pass === data.password) {
            return true;
          }
          return false;
        })
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
