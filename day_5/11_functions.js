// functions!
// a set of instructions that we call by name
function sayHello() {
  console.log("Hi Jacob!");
}

sayHello();

function sayHello( person ) {
  console.log(`Hi ${ person }!`);
}

sayHello("Jacob");
sayHello("Jason");
sayHello("Tam");

function sayGoodbye( person ) {
  console.log(`Bye ${ person }!`);
}

sayGoodbye("Jacob");
sayGoodbye("Jason");
sayGoodbye("Tam");

// functions are values
function add() {
  console.log( 1 + 1 ); // this prints the sum to the console, this is a developers tool to gain visibility into your code
}

add();
console.log(2);

function add() {
  return 1 + 1;
}

add(); // value!
2;

function addOne(number) {
  return number + 1;
}

add(55); // 56
add(3.14159); // 4.14159

function add(number1, number2) {
  return number1 + number2;
}

// function add(...numbers) {
//   // array of numbers
// }

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

add(5, 6) * subtract(12, 2);
add(divide(2, 4), multiply(5, 6)); // functions are values

function add() {}
let add = function() {};

const me = {
  jump() { console.log("jumping!") }
}

me.jump();

let functions = [add, subtract, multiply, divide];
functions[0](); // add()
functions[3](); // divide();

// IN JAVASCRIPT!  Functions are first-class citizens!??!

console.log( add(5, 6) );

function add(number1, number2) {
  return number1 + number2;
}


let subtract = function(number1, number2) {
  return number1 - number2;
}

console.log(subtract(10, 2));
