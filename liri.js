// REQUIRE .env FILE
require("dotenv").config();

// REQUIRE REQUEST
var request = require("request");

// REQUIRE MOMENT
var moment = require('moment');

//REQUIRE FILE SYSTEMS
var fs = require("fs");

// LINK KEY PAGE
var keys = require("./keys.js");

// INITIALIZE SPOTIFY
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

// OMDB AND BANDS IN TOWN API'S
var omdb = (keys.omdb);
var bandsintown = (keys.bandsintown);


// TAKE USER COMMAND AND INPUT
var userInput = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");

function userCommand(userInput, userQuery) {

};
function spotifyThisSong() {}
function movieThis() {}


// I need to create these functions to be able to call for the information when the user types in their search.
// in each function I need if else statements for when the user requests information and what to pull from the different api's
// I need to set up the results to call from the json data collected when the user submits their search.
// I need to after I parse the results from the json strings set up a for loop to loop through the results until I get the desired reults.
// in each step there needs to be a console log certain messages based of what the user has searched for.