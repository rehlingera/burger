// Require express
var express = require("express");

// Establish port
var PORT = process.env.PORT || 8080;

// Start express
var app = express();

// Static update of public path
app.use(express.static("public"));

// Formats for express to use
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Require Handlebars
var exphbs = require("express-handlebars");

// Allow express to use Handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Require routes
var routes = require("./controllers/burgers_controller.js");

// Allow express to use the routes
app.use(routes);

// Server then starts listening
app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});