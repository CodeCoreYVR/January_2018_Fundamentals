// higher order functions - a function that takes in a function as an argument OR returns a function

// function ( function(){} ) {}
// function () { return function(){} }
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// calc is a higher order function because it takes in a function as an argument
function calc( operation, number1, number2 ) {
  return operation( number1, number2 );
  // return 11;
}

// if you want calc to turn into meaningful value it must return something
calc( add, 5, 6 );






//
