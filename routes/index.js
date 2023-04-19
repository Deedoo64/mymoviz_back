require("dotenv").config();

const fetch = require("node-fetch");

var express = require("express");
var router = express.Router();

//const API_key = "06b5c4031a6419f5e5c4762494356967";
const API_key = process.env.API_key;

const API_url = "https://api.themoviedb.org/3";

// console.log("API key ", API_key);

router.get("/movies", (req, res) => {
  fetch(API_url + `/discover/movie?api_key=${API_key}`)
    .then((response) => response.json())
    .then((data) => {
      res.json({ movies: data.results });
    });
});

module.exports = router;
