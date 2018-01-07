// Assignment: [Demo] Bigger number
// Write a Javascript code that defines two variables x and y with numbers and
// then prints to the console the larger of the two number printing.
// For instance print "The larger number is x"

let firstNumber = parseInt(prompt('Give me a Number'))
let secondNumber = parseInt(prompt('Give me another Number'))

if (firstNumber > secondNumber) {
  console.log(`${firstNumber} is the larger number`)
} else {
  console.log(`${secondNumber} is the larger number`)
}
