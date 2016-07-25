var isLoggedIn = function(req) {
  return req.session ? !!req.session.user : false;
};

exports.checkUser = function(req, res, next){
  console.log('about to redirect');
  if (!isLoggedIn(req)) {
    res.status(200).send('/login');
  } else {
    next();
  }
};

exports.createSession = function(req, res, newUser) {
  var sess = req.session;
  return sess.regenerate(function() {
    sess.user = newUser;
    sess.save(function(err) {
      if(err) {
        console.log('err from insie sess.save is', err);
      }
    })
  });
};