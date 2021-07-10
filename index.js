const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost, wrongGuess, } = require("./gamelogic");

function game(word, guesses) {

  console.log("Welk word is dit: ", displayWordSoFar(word, guesses));

  console.log(wrongGuess(word, guesses));

  const letter = question("Raad een letter: ");

  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  if (isGameWon(word, guesses)) {
    console.log(displayWordSoFar(word, guesses));
    console.log("Je bent fantastisch!");
  } else if (isGameLost(word, guesses)) {
    console.log("Je hangt!")
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






const library = ['codeersfeer', 'multipluttificatie', 'boolean', 'array', 'integer'];
const word = library[Math.floor(Math.random()*library.length)];
game(word, []);




