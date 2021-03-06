//displays a underscore "_ " for each letter to guess
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

// wrongGuess adds wrong guessed letters to the wrongGuesses array
// a for loop checks every letter of the array and
// if a wrong letter is NOT in the array it will be added with (push()).
function wrongGuess(word, guesses) {
    let wrongGuesses = [];
    for (i = 0; i <guesses.length; i++) {
        if (!word.includes(guesses[i])) {
            wrongGuesses.push(guesses[i]);
        }
    } return wrongGuesses

}

//everytime a wrong letter is guessed another part of
//the hangman is being added
//based on the length of the wrongGuesses array
function gallows(word, guesses) {
    switch(wrongGuess(word, guesses).length) {
        case 1:
            console.log(`
 __________
| /     |
|/      
|       
|       
|
===========`);
            break;
        case 2:
            console.log(`
 __________
| /     |
|/      o
|       
|       
|
===========`);
            break;
        case 3:
            console.log(`
 __________
| /     |
|/      o
|       O
|       
|
===========`);
            break;
        case 4:
            console.log(`
 __________
| /     |
|/     _o
|       O
|       
|
===========`);
            break;
        case 5:
            console.log(`
 __________
| /     |
|/     _o_
|       O
|       
|
===========`);
            break;
        case 6:
            console.log(`
 __________
| /     |
|/     _o_
|       O
|      / 
|
===========`);
            break;
        case 7:
            console.log(`
 __________
| /     |
|/     _o_
|       O
|      / \
|
===========`);
            break;
        default:
            console.log(`
 __________
| /     
|/     
|       
|      
|
===========`);

    }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  wrongGuess: wrongGuess,
    gallows: gallows,
};
