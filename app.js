var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var config = require('./config');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var cors = require('cors');
app.use(cors({origin: 'http://localhost:8080'}));

app.use("/api", routes);

const PORT = config.PORT;

var server = app.listen(PORT, function () {
    console.log("app running on port.", PORT); 
});