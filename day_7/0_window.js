// using window.alert, window.prompt, window.confirm to play a guessing game
// 1. use window alert to outline the rules of the game: guess a number between 0 and 10
// 2. use window.prompt to take in the users guess
// 3. use javascript to create a random number and to check if that number that was entered matches the one you generated
// 4. use window.cofirm to let the user know if they got it right and if they didn not ask them if they would like to guess again or exit!

let upper = 10;
let secret = Math.round(Math.random() * upper);
let guess;

// while
// for, for of
// do..while

do {
  guess = window.prompt(`Please guess a number between 0 and ${ upper }:`);

  if (secret === parseInt(guess)) {
    window.alert(`You guessed my secret number: ${ secret }`);
    break;
  } else {
    window.alert(`Sorry the number ${ guess } is incorrect, would you like to try again?`);
  }
} while(true);

// [stretch] a random number between 0 and 100
// give the user clues if their guess was too high or too low

// retry feature with confirm? 
