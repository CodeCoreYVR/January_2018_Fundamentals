// objects - things we can sense
// touch, taste, hear, see, smell
// six sense???

// ikea table is flat, shinny, light, smooth
// computer has a screen, keyboard, power bar
// human has name, age, hair, eyes, scent

// objects - fundamental building blocks behind anything meaningful in programming

const car = new Object(); // object constructor
const car = {}; // object initializer

// const - the memory location of our object should never change
// object has properties

const car = {
  // property: value
  make: "Tesla",
  model: "Model 3"
};

const human = {
  name: "Jacob",
  age: 39
};

// dot operator
// allows us to create properties even after the object has been created
car.capacity = 5;
car.colour = "white";
// car.drive(); // function associate with an object -> method
// shopping.push(); //
console.log(car);

human.height = 160;
human.weight = 140;
human.occupation = "Instructor";
// human.wife = {
//   name: "Julia"
// };

console.log(human);

human.hairColour = "black";
human.hair colour = "black"; // throws an error

// arrays extend the object class
// array is built upon object
// human = {};
// another way to create properties in our object is to use the [] syntax
human["hair colour"] = "black";
human[0] = "something!??!";

let customProperty = "speed";
human[ customProperty ] = 99;


// const = shoppingList = {
//   0: "beer",
//   1: "milk",
//   2: "eggs",
//   3: "cheese",
//   4: "yogurt"
// };

// lets make a me object
const me = {
  name: "Jacob",
  age: 39,
  hobby: "Rock Climbing",
  hairColour: "black",
  skill: "Programming"
};



const you = new Object();
you.rib = true;
you.name = "Adam";
you.hobby = "Swim";
you["hair colour"] = "blonde";
let property = "skill";
you[property] = "Typing";











//








//
