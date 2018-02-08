// data
5;
"Jacob";

// remember data
// variable
// let, const, var

let age = 39;
let name = "Jacob";

console.log(`${name} is ${age} years old.`);

// functions - a list of instructions tied to a name
// input -> output
// define
function morning() {
  console.log("waking up");
  console.log("eating breakfast");
  console.log("commute to work");
}
// execute or run a function
morning();
morning();
morning();
morning();
morning();

// input -> output
// parameters
function add(number1, number2) {
  console.log(number1 + number2);
}

// arguments
add(5, 6); // prints to the console the sum of two numbers
// return undefined

// return
function add(number1, number2) {
  return (number1 + number2);
}

add(5, 6); // it becomes the sum of two numbers
// function is a value
11 === add(5, 6);

add( add( add(1,1) , add(1,2) ) , add( add(1,0), add(2,3)) );

// data structures - complex data
let colour = "red";
// array - allows us to specify multiple values at one memory location
let colours = ["purple", "gold"];

// array - an indexed list of information
// list <-!!!!
let topTenSongs = [];
let shoppingCart = [];
let todoList = [];

let todoList = ["teach", "sleep", "eat"];
todoList.push("play");
todoList.push("hiking");
todoList.push("rock climbing");
// push is an array method
// pop, slice, splice, shift, unshift and a length property

// iterate over our array
for (let element of array) {}

for (let i=0; i<todoList.length; i++) {
  todoList[i];
}

// object - the basis for anything meaningful in programming
// what an array is made up of

const car = {
  // property: value
  make: "tesla",
  model: "roadster",
  capacity: 2,
  colour: "red"
};


car.colour; // "red"
// car[4]; // 4 ????

const todoList = {
  // property: value
  0: "code",
  1: "eat",
  2: "sleep",
  3: "play"
};

// dot operator
car.colour; // "red"
// a. square bracket syntax
car["colour"]; // "red"
// b. square bracket syntax
let specificProperty = "colour";
car[ specificProperty]; // "red"

// iterate over an object
// for (let property in object)
for (let property in car) {
  console.log(`property: ${ property }`);

  // let specificProperty = "colour";
  // car[ specificProperty]; // "red"
  console.log(`value: ${ car[ property ] }`);
}

// key == property
let keys = Object.keys(car);
let values = Object.values(car);

// keys: values
{
  colour: "red",
}

// getter / setter
// attribute accessor
car.colour = "blue";

// "hello"
{
  h: 1,
  e: 1,
  l: 2,
  o: 1
};

// functions!!!
function sayHi() {
  console.log("Hi");
}

// +1
function sayHi(name) {
  console.log(`Hi ${name}`);
}

sayHi();
sayHi();
sayHi();

sayHi("Jacob");
sayHi("Tam");
sayHi("Steve");

// for/while
// higher-order function - that takes in a function as an argument
sayHi; // [Function], passes the function by reference
sayHi(); // "Hi!", executes the function

function runThree( fn ) {
  fn();
  fn();
  fn();
}

runThree( sayHi );

function add( number1, number2 ) {
  return number1 + number2;
}
add(5,6); // 11

function calculator( operation, number1, number2 ) {
  // add( 5, 6 ); // 11
  return operation( number1, number2 );
}
calculator( add, 5, 6 ); // 11

// mapping
// square mapping
function square( number ) {
  return number * number;
}

let numbers = [1,2,3,4,5];
let results = [];

for (let number of numbers) {
  let result = square(number);
  results.push( result );
  // results.push( number * number );
}

function map( fn, array ) {
  let results = [];

  for (let element of array) {
    let result = fn(element);
    results.push( result );
    // results.push( number * number );
  }
  return results;
}
map( square, numbers ); // [1,4,9,16,25];

// setInterval
// setTimeout
setTimeout(function(){
  console.log("dessert is served");
}, 5000);

setTimeout(function(){
  console.log("salad is served");
}, 100);

setTimeout(function(){
  console.log("steak is served");
}, 3000);

setTimeout(function(){
  console.log("soup is served");
}, 1000);

// console.log("dessert is served");
// console.log("salad is served");
// console.log("soup is served");
// console.log("steak is served");

// forEach
// lodash.js
// underscore.js
// jquery.js

// <script src="jquery-3.3.1.js"></script>
$('h1').html('Jacob was here');

$(document).ready(function(){
  console.log("document is ready");
  $('h1').html('Jacob was here');

  $('form').submit(function(event) {
    event.preventDefault();
    // $('#password').val();
    // $('#credit-card').val();

    // bottom of list
    $('ul').append('<li>' + $('input[type=text]').val() + '</li>');
    // $('ul').append(`<li> ${ $('input[type=text]').val() } </li>`);
    // top of list
    $('ul').prepend('<li>' + $('input[type=text]').val() + '</li>');
  });
});

// presistance of information!!!
























//
