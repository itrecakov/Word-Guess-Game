var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersUsed = [];
var ranLetter = ranLetter;
var eachofLetters = null;

var ranLetter = computerChoice[Math.floor(Math.random() * commputerChoice.length)];

function countGuessesLeft() {
    ranLetter = computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

document.onkeyup = function (event) {
    var playerGuess = event.key;
    if playerGuess === ranLetter) {
        wins++;
        guessesLeft = 10;
        lettersUsed = [];
    }
}

countGuessesLeft();
if (playerGuess !== ranLetter) {
    guessesLeft--;

}

if (guessesLeft = 0) {
    losses++;
    lettersUsed = [];
    guessesLeft: 10;
}
if (guessesLeft.indexOf(playerGuess) >= 0) {

} else {
      guessesLeft.push(playerGuess);
      document.getElementById('playerGuess').innerHTML = guessesLeft;
}

document.getElementById('Wins').innerHTML = wins;
document.getElementById('losses').innerHTML = losses;
document.getElementById('guessesLeft').innerHTML = guessesLeft;

};