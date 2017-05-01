// Require node module readline for command line
var rl = require('readline');

// Set initial variables
var winner = false;

// Create a 3x3 game board as nested arrays
var gameBoard = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

// Create a method for user to place marker
var createMarker = (position, marker) => {
  gameBoard[position] = marker.toUpperCase();
}

// Create a method to check for different combos for winner
var checkWinner = () => {
  // If rows
  if((gameBoard[0][0] + gameBoard[0][1] + gameBoard[0][2] === 'XXX' || gameBoard[0][0] + gameBoard[0][1] + gameBoard[0][2] === 'OOO') || (gameBoard[1][0] + gameBoard[1][1] + gameBoard[1][2] === 'XXX' || gameBoard[1][0] + gameBoard[1][1] + gameBoard[1][2] === 'OOO') || (gameBoard[2][0] + gameBoard[2][1] + gameBoard[2][2] === 'XXX' || gameBoard[2][0] + gameBoard[2][1] + gameBoard[2][2] === 'OOO')) {
    // Set winner to be true
    winner = true;
    // If columns
  } else if ((gameBoard[0][0] + gameBoard[1][0] + gameBoard[2][0] === 'XXX' || gameBoard[0][0] + gameBoard[1][0] + gameBoard[2][0] === 'OOO') || (gameBoard[0][1] + gameBoard[1][1] + gameBoard[2][1] === 'XXX' || gameBoard[0][1] + gameBoard[1][1] + gameBoard[2][1] === 'OOO') || (gameBoard[0][2] + gameBoard[1][2] + gameBoard[2][2] === 'XXX' || gameBoard[0][2] + gameBoard[1][2] + gameBoard[2][2] === 'OOO')) {
    // Set winner to be true
    winner = true;
    // If diagonals
  } else if ((gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2] === 'XXX' || gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2] === 'OOO') || (gameBoard[0][2] + gameBoard[1][1] + gameBoard[2][0] === 'XXX' || gameBoard[0][2] + gameBoard[1][1] + gameBoard[2][0] === 'OOO')) {
    // Set winner to be true
    winner = true;
  }
} 