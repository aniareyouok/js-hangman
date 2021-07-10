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

//returns true when all letters have been guessed
//if word is equal to displayedWord then all letters have been guessed
//returns false when all letters have not been guessed yet
//if word is NOT equal to displayedWord
//somehow .replace(" ", "") or replaceAll(" ", "") only removed the first space
//so found this tip on stackoverflow to use / /g instead of " " and it removes all the spaces!

function isGameWon(word, guesses) {
    let displayedWord = displayWordSoFar(word, guesses);
    return displayedWord.replace(/ /g, "") === word;
}

//returns true if 7 or more incorrect letters have been guessed
//returns false if less than 7 wrong letters have been guessed
//let wrongLetters counts all wrong guesses

function isGameLost(word, guesses) {
    //Maakte een functie wrongGuess die deze code overbodig maakte
    // let wrongLetters = 0;
    // for (i = 0; i < guesses.length; i++) {
    //     if (!word.includes(guesses[i])) {
    //         wrongLetters++;
    //     }
    // }
    // return wrongLetters === 7;

    return (wrongGuess(word, guesses).length === 7);
}

//wrongGuess houdt bij welke letters verkeerd geraden zijn en wanneer opgeroepen worden deze getoond op het scherm.
//de foor loop gaat elke geraden letter in de array guesses af
//en checkt of het word deze letters NIET bevat
//dan wordt het verkeerd geraden letter met push toegevoegd aan de array wrongGuesses

function wrongGuess(word, guesses) {
    let wrongGuesses = [];
    for (i = 0; i <guesses.length; i++) {
        if (!word.includes(guesses[i])) {
            wrongGuesses.push(guesses[i]);
        }
    } return wrongGuesses;

}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  wrongGuess: wrongGuess,
};
