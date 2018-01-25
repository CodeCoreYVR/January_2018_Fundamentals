// Assignment: Filtering Arrays
// Part 1
// Write a function that takes a number and returns whether the number is positive or not.
// [Stretch]: return false if the parameter is not a number.

// Part 2
// Write a function called filter that takes two parameters, an array (a) and
// another function (fn). This function should return a new array containing
// all the items in a for which fn returns true. For example, you should be
// able to call it like this:

// filter([1,3,4], function(num){
//   return num > 2;
// });

// Test filter using the isPositive function you wrote above and the following array [-5, 0, 1, 'car'].
// [Stretch]: Afterwards, try to achieve the same results using the built in ES6 filter function or the lodash filter function.

function isPositive(num) {
  return Math.sign(num) === 1;
}

function filter(arr, callbackFunction) {
  // 1. loop over arr
  // 2. check each number and see if it is positive
  // 3. if true, push it into a result array
  // 4. else do nothing... so should there be an else?
  let result = []

  for(let number of arr) {
    if(callbackFunction(number)) {
      result.push(number)
    }
  }

  return result
}

filter([1,3,4], isPositive)
filter([-5, 0, 1, 'car'], isPositive)
filter([1,3,4, -1, -10, 100, 'Jacob'], isPositive)



// ES6 Stretch
// Use the same isPositive function above
const stretchArray = [ -1, 6, -3, 4, 1, 'Yousef', -50, 88, 'Jennie']

stretchArray.filter(element => isPositive(element));
