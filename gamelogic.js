//displays "_ " for each letter to guess (for loop until word.length with console.log "_ " every loop)
//displays letters guessed so far
// - wordArray = word.split(""); makes a array with each letter at own index
// -for loop until wordArray.length and every loop
// - if guesses includes index van wordArray
// - console.log wordArray[i]
// - else console.log "_ "


function displayWordSoFar(word, guesses) {
  word = word.split("");
  let displayedWord = "";
  for (let i = 0; i < word.length; i++) {
      if (guesses.includes(word[i])) {
          displayedWord += word[i] + " ";
      } else {
          displayedWord += "_ "
      }
  }
  return displayedWord;
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
