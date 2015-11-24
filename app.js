var express = require("express");
var session = require("express-session");
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
var routes = require("./routes");
var pport = require('./pport');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
  secret: '8c16f4d483902d48d205ec2a2d3022ea',
  resave: true,
  saveUninitialized: true
}));

app.use(pport.passport.initialize());
app.use(pport.passport.session());

app.use(express.static("public"));

app.use("/", routes);

app.listen(8000,'0.0.0.0');
