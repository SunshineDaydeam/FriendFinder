var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

console.log("You opened this page");

var app = express();
var PORT = process.env.PORT || 3000;

console.log("Your port is: " + PORT);
