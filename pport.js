var Strategy = require("passport-twitter").Strategy;

var pport = {};

pport.utoken = "";
pport.utokenSecret = "";
pport.uprofile = "";

pport.passport = require("passport");

pport.passport.use(new Strategy({
  consumerKey: "cBFrUcFGSvD4NCrjatPMB4o8D",
  consumerSecret: "aRIUNlNBweeAVVDSaYwqvasgAZ7cdcG4Cf2Vxp3BukqeSRtYwb",
  callbackURL: 'http://10.0.1.27:8000/login'
}, function(token, tokenSecret, profile, cb) {
  pport.utoken = token;
  pport.utokenSecret = tokenSecret;
  pport.uprofile = profile;
  return cb(null, profile);
}));

pport.passport.serializeUser(function(user, cb) {
  cb(null, user);
});
pport.passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = pport;
