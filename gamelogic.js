//displays "_ " for each letter to guess (for loop until word.length with console.log "_ " every loop)
//displays letters guessed so far
// - word = word.split(""); makes a array with each letter at own index
// -for loop until word.length and every loop
// - if word[i] === guesses[i]
// - console.log guesses[i]
// - else console.log "_ "


function displayWordSoFar(word, guesses) {

}

function isGameWon(word, guesses) {
  // WRITE ME
}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
