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

//returns false when all letters have not been guessed yet
//if word is NOT equal to displayedWord
//returns true when all letters have been guessed
//if word is equal to displayedWord then all letters have been guessed

function isGameWon(word, guesses) {
    let displayedWord = displayWordSoFar(word, guesses);
    return displayedWord.replace(/ /g, "") === word;
}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
