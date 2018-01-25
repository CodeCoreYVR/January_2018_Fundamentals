// object + properties + functionality

// declaritive syntax - moves it into the global name space, it can be declared before or after our object
// expressive syntax - it must be declared before
let running = function() {
  // this is a relative reference
  // it asks, who was the object who called this method?
  console.log("i am running using the art asset: " + this.asset);
}

const mario = {
  // property: value
  asset: "mario.jpg",
  age: 40,
  favouritColour: "red",
  profession: "plumber",
  // behaviour, abilities
  // method - a function that belongs to an object or class
  run: running,
  // : function
  swim() { console.log("swim!") }
};

const luigi = {
  // property: value
  asset: "luigi.jpg",
  age: 38,
  favouritColour: "red",
  profession: "plumber",
  // behaviour, abilities
  // method - a function that belongs to an object or class
  run: running,
  // : function
  swim() { console.log("swim!") }
};

mario.run();
mario.swim();



// a function that has no name is called an anonymous function
// function() {
//   console.log("hi");
// }

// function expression
// let sayHi = function() {
//   console.log("hi");
// };

// class describes an object
class Human {
  // this the first method that is executed when an object in instantiated
  constructor(name, age) {
    console.log("I am in here?");
    this.name = name;
    this.age = age;
  }
}

// make an instance of the class, a human object
const man = new Human("Jacob", 39);
const woman = new Human("Julia", 38);

let shoppingList = new Array();
const me = new Object();

// higher order function
// a function that takes in a function as an argument
// or a function that returns a function
function sayHello() {
  console.log("Hi!");
  console.log("Hi!");
}

// runThree - it takes in a function as an argument
function runThree( fn ) {
  fn();
  fn();
  fn();
}

runThree( sayHello );
// runThree( mario.run );

// calculator
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function calc(operation, number1, number2) {
  return operation(number1, number2);
}

calc(add, 5, 6);
calc(subtract, 5, 6);

// built-in higher functions???
// setTimeout(fn, delay);
function sayHello() {
  console.log("Hi!");
}
function sayGoodbye() {
  console.log("Bye!");
}
setTimeout(sayHello, 3000);
setTimeout(sayGoodbye, 1000);

// Date();

// sayGoodbye();
// sayHello();
let sayHello = function() {
  console.log("ciao");
};

setInterval(function() {
  console.log("ciao");
}, 1000);

let intervalId = setInterval(function(){
  console.log("ciao");
  clearInterval(intervalId);
}, 1000);

let counter = 0;
// while (counter < 10)...
let intervalId = setInterval(function(){
  console.log(counter);
  counter++;
  if (counter > 10) {
    clearInterval(intervalId);
  }
}, 1000);


// forEach

// function setInterval(fn, delay) {
//   ..
//   .
//   .
//   return uniqueId;
// }


// mapping
let numbers = [1,2,3,4,5];
// square mapping
// [1,4,9,16,25]

function square(number) {
  return number * number;
}

square(10); // 100

function mapping(array, fn) {
  let results = [];

  for (let element of array) {
    results.push( fn( element ) );
  }

  return results;
}

mapping(numbers, square);


//





//
