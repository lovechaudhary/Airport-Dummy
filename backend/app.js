const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get("http://xiapp.tradewindapps.com:9912/airports", (req, res) => {
  res.send("Hello");
});

app.listen(port);
console.log("Server start: " + port);
