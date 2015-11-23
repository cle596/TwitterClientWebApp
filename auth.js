var OAuth = require("oauth");

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  'cBFrUcFGSvD4NCrjatPMB4o8D',
  'aRIUNlNBweeAVVDSaYwqvasgAZ7cdcG4Cf2Vxp3BukqeSRtYwb',
  '1.0A',
  null,
  'HMAC-SHA1'
);

module.exports = oauth;
