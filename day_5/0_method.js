// a function that is associated with an object or class
// in an array, we call the push, pop, or sort method
// let shoppingList = new Array();
let shoppingList = [];
shoppingList.push("butter"); // push is a method that adds an item to the end of my list

// video games
// characters have functionality or behaviour

// mario bros
// mario - has the ability to move, jump, duck, swim, fly, ride on a dinosaur
// const mario = new Object();

const mario = {
  // describing mario's properties
  profession: "plumber",
  age: 40,
  favouriteFood: "pizza",
  moustache: true,
  // describe mario's functionality or behaviour
  // mario can....
  // we can only call this run function with context to mario
  run: function(){ console.log("Mario is running...") }
  // jump: ,
  // swim:
};

mario.age; // 40
mario.profession; // plumber
mario.run; // => [Function] ???
mario.run(); // executes the function <- method

array.push();

// what do we call this?
// anonymous function - a function that has no name
let add = function(){};

// function declaration
function add(number1, number2) {
  return number1 + number2;
}
// puts the add function into the global namespace
add(5, 6); // execute a function

// function expression
let add = function(number1, number2) {
  return number1 + number2;
};
// we can control the scope of variable
// console.log(add);
add; // we get a reference to the anonymous function
// in order to execute the function, we must add: ();
add(); // execute the function
add(5, 6); // execute the function with arguments










//
