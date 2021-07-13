const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost, wrongGuess, gallows } = require("./gamelogic");

//the game starts here
function game(word, guesses) {

  //logs the hidden word and every correctly guessed letter
  console.log("\nWelk word is dit: ", displayWordSoFar(word, guesses));

  //logs the wrong letters guessed
  console.log(wrongGuess(word, guesses));

  //input value is saved in const letter
  //uppercase input wil automatically turn in to lowercase
  const letter = question("Raad een letter: ").toLowerCase();

  //only 1 character may be entered at a time
  //input of 2 characters will not be pushed to guesses
  if(letter.length > 1 ) {
    console.log("\nJe moet 1 letter raden per keer");
  } else {

    // adds the guessed letter to the array of guesses
    guesses.push(letter);

    //logs the gallows and every wrong letter another part of the hangman is being added
    gallows(word, guesses);

  }

  // if game is won, the correctly guessed word is shown
  // and a message saying you've guessed the word and the game is stopped
  // otherwise, if game is lost, a message saying you've been hanged, will be shown,
  // the gallows with hangman, the complete array of wrong letters and the game wil be stopped
  // in all other cases the game wil continue (the game() function)
  if (isGameWon(word, guesses)) {
    console.log("\nFANTASTISCH!");
    console.log("\nHelemaal goed geraden: " + displayWordSoFar(word, guesses));
    console.log(wrongGuess(word, guesses));
    gallows(word, guesses);
  } else if (isGameLost(word, guesses)) {
    console.log("\nWelk word is dit:" + displayWordSoFar(word, guesses));
    console.log("\n  JE HANGT!");
    console.log(wrongGuess(word, guesses));
    gallows(word, guesses);
  } else {
    game(word, guesses); // volgende ronde! we roepen game nog een keer aan
  }



}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);





//every new game a random word wil be chosen from the library array
const library = ['destructuring', 'eventlistener', 'boolean', 'array', 'integer'];
const word = library[Math.floor(Math.random()*library.length)];
game(word, []);




