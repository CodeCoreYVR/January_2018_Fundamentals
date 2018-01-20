// simple higher order function
function sayHi() {
  console.log("Hello!");
}

// higher order
function repeatThree( fn ) {
  fn();
  fn();
  fn();
}

repeatThree( sayHi );

// mario.run();
// mario.run; // [ Function ]

// complexity + 1

function sayHi( name ) {
  console.log(`Hello ${name}!`);
}

// higher order
function repeatThree( fn, name ) {
  fn( name );
  fn( name );
  fn( name );
}

repeatThree( sayHi, "Jacob" );

// + 1 complexity

// Test Driven Development
repeat( sayHi, "Jacob", 10 );
// "Jacob"
// "Jacob"
// "Jacob"
// "Jacob"
// "Jacob"
// "Jacob"
// "Jacob"
// "Jacob"
// "Jacob"
// "Jacob"

function sayHi( name ) {
  console.log(`Hi ${ name }`);
}

function repeat( fn, name, number ) {
  for (let i=0; i<number; i++) {
    fn( name );
  }
}








//
