// required packages
var express = require("express");
var bodyParser = require("body-parser");

// set up port and express
var PORT = process.env.PORT || 3000;
var app = express();

// serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// set up handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// listen
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});