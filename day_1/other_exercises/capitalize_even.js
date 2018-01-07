// Write a code that takes in a string from the user and then prints back with
// even letters upcased and the rest downcased.
// For example, "hello" becomes "hElLo"

let userString  = prompt("Please enter a string:");
let capEvenString = "";

for (let i = 0; i < userString.length; i++) {
  if (i % 2 == 0) {
    capEvenString += userString[i].toLowerCase();
  } else {
    capEvenString += userString[i].toUpperCase();
  }
}

console.log(capEvenString);
