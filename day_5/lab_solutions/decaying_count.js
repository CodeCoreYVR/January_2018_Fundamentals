// Assignment: Decaying Count
// Write some code that writes "1" to the console,
// then 1 second later writes "2" to the console,
// then 2 seconds after that writes "3" to the console,
// ...until it gets to "10".

// Steps...
// 1. create a function
// 2. Inside the function, write a for loop, the old style for loop
// 3. Place a setTimeout inside the for loop
// 4. setTimeout takes in two arguments: a callback function and time in milliseconds
// 5. Place a console.log inside the callback function

function decayingCount() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  }
}
decayingCount()



// Version 2
// Passing in a named function into setTimeout
// If we pass in `i` directly into the logger function, the function is being
// executed immediately, to remedy this, we can pass in `i` using the bind method
// Dont worrry about this, it is an avanced concept. Read more about it here.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind#Partially_applied_functions
function logger(number) {
  console.log(number)
}

function decayingCount() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(logger.bind(null, i), i * 1000);
  }
}

decayingCount()
