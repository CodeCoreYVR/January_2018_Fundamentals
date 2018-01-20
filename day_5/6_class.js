// examples of classifications?

// income brackets
// human class
// dog breeds
// cars, SUV, sedans, hatch backs
// vancouvers houses / blueprints classifications
// pepper shaker class of pepper

// houses / blueprints classifications
// house can hold people
// 8 - 12 feet a story
// 5'7"

// can a blue print hold people?
// can you stay warm in a blue print?

// the blue print describes what the house should be
// blue print is the plans for the house
// we can resuse the blue to make many houses
class House {
  // reserved keyword in javascript
  // constructor method - this is the first method that is run when we make an object from this class
  constructor( customColour ) {
    // property
    // instance variable of the class house
    this.colour = customColour;
    // console.log("Inside the constructor method of blue house.");
    console.log(`Inside the constructor method of ${ this.colour } house.`);
  }
}

// new keyword, allows us to make an instance of a class. construct an object from a class
let bungalow = new House("green");
let teepee = new House("grey");
let mansion = new House("gold");
let condo = new House("blue");
// condo = {
//   colour: "pink"
// }
// change the colour of our condo
// condo.colour = "blue";
// console.log(`My new condo's colour is ${ condo.colour}`);

// let shoppingList = new Array();
// const car = new Object();









//
