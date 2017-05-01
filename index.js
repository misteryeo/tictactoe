// Require node module readline for command line
var rl = require('readline');

// Create a 3x3 game board as nested arrays
var gameBoard = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

// Create a method for user to place marker
var createMarker = (position, marker) => {
  gameBoard[position] = marker;
}

