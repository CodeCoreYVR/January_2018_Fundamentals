// Assignment: [lab] Higher-Order Functions
// Write a function named "call" which takes a number and two functions as
// parameters, and returns the result of calling the two functions on the number.

// const doubleIt = function (x) {
//  return 2 * x;
// }

// const addOne = function(x) {
//   return x + 1;
// }

// Write a function so you can use:
// call(5, doubleIt, addOne); // => 11


function call(number, fn1, fn2) {
  // execute fn1 passing in number, save the result to a variable
  // take that result and pass it in to fn2
  // return that result
  let result = fn1(number)
  return fn2(result)
}

function doubleIt(x) {
 return 2 * x;
}

function addOne(x) {
  return x + 1;
}

call(34, doubleIt, addOne)
