// Assignment: [Lab] Grade Calculator
// Write a Javascript code that generates a random number for the user's
// score (0 - 100) in a variable score and then prints out their letter grade
// (F - A+).

// Get a random number between 0 and 100
let number = Math.round(Math.random() * 100)
console.log(number)

// Check the score against some conditions
if (number <= 25) {
  console.log('F')
} else if (number <= 50) {
  console.log('D')
} else if (number <= 75) {
  console.log('C')
} else if (number <= 100) {
  console.log('A')
}
