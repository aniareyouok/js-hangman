//displays "_ " for each letter to guess (for loop until word.length with console.log "_ " every loop)
//displays letters guessed so far
// - displayedWord is a string variabel to collect results in
// - word = word.split(""); makes a array of a string with each letter at own index
//   to be used in for loop
// - for loop wil run until word.length and at each loop checking
// - if guesses includes current letter of word (word[i]) then
// - the current letter (word[i]) should be added to result (displayedWord)
// - finally return the result


function displayWordSoFar(word, guesses) {
    let displayedWord = "";
    word = word.split("");

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
