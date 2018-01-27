// good morning!
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// 1, 3, 5, 7, 9  odd numbers
// 2, 4, 6, 8, 10 even numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

1 % 2 == 0; // true even, false odd

if (numbers[0] % 2 == 0) {
  console.log("that number is even!");
} else {
  console.log("that number is odd!");
}

if (numbers[1] % 2 == 0) {
  console.log("that number is even!");
} else {
  console.log("that number is odd!");
}

if (numbers[2] % 2 == 0) {
  console.log("that number is even!");
} else {
  console.log("that number is odd!");
}
// ...

// loop
for (let number of numbers) {
  if (number % 2 == 0) {
    console.log("that number is even!");
  } else {
    console.log("that number is odd!");
  }
}

for (let i=0; i<numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log("that number is even!");
  } else {
    console.log("that number is odd!");
  }
}

// turn this into a function
function isEven( number ) {
  // console.log("Yes it is even");
  // console.log("No it is odd");
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// v2 ???
function isEven( number ) {
  return (number % 2 == 0);
}

function isOdd( number ) {
  return (number % 2 != 0);
}
// boolean function
isEven(10); // true
isEven(7); // false
isOdd(10); // false
isOdd(7); // true;

// function isOdd() {}
// function pluck() {}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 // remapping using square math function
 [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

isEven(numbers[0]);
isEven(numbers[1]);
isEven(numbers[2]);

for (let number of numbers) {
  isEven(number);
}

[false, true, false, true, false, true, false, true, false, true];

// give me back an array on only even numbers
let even = [];

for (let number of numbers) {
  if (isEven(number)) {
    // add it to a new list
    even.push(number);
  }
}

for (let number of numbers) {
  (isEven(number)) ? even.push(number) : false;
}

function pluck( fn, array ) {
  let results = [];
  for (let element of array) {
    if (fn(element)) {
      // add it to a new list
      results.push(element);
    }
  }
  return results;
}





//
