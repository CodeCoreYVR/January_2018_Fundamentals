// Assignment: [Lab] FizzBuzz
// Write code that prompts the user for two numbers, then iterates through the
// numbers 1 - 100. The function will print "fizz" if the current number is
// divisible by the first number, "buzz" if the current number is divisible
// by the second number, "fizzbuzz" if it's divisible by both, else print the
// current number.

// Step 1: Get input from the user
let firstNumber = parseInt(prompt('Give me a number'))
let secondNumber = parseInt(prompt('Give me another number'))

// Step 2: We want to repeat this behaviour so we need use a loop
// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//   console.log(currentNumber)
// }

// Step 3: Compare the two numbers and print out the result
// This should be done inside the loop
// example.... (currentNumber % 3) === 0 then print 'Fizz'
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
  if ((currentNumber % (firstNumber * secondNumber)) === 0) {
    console.log('FizzBuzz')
  } else if (currentNumber % firstNumber === 0) {
    console.log('Fizz')
  } else if (currentNumber % secondNumber === 0) {
    console.log('Buzz')
  } else {
    console.log(currentNumber)
  }
}

