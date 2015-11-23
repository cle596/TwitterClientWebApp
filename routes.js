var express = require('express');
var pport = require('./pport');
var oauth = require('./auth');
var router = express.Router();

router.get(
  "/login",
  pport.passport.authenticate("twitter"),
  function(req, res) {
    res.redirect("/");
  }
);

router.get(
  "/tweet",
  function(req, res) {
    oauth.post(
      'https://api.twitter.com/1.1/statuses/update.json',
      pport.utoken, //test user token
      pport.utokenSecret, //test user secret
      {
        "status": "snap"
      },
      function(e, data, resp) {
        if (e) console.error(e);
        console.log(require('util').inspect(data));
        res.redirect("/");
      }
    );
  }
);

module.exports = router;
