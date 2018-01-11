// NUMBERS
5 + 5;
10 / 2;
2 ** 8;
22 % 4; // the remainder, modulo or modulus

Math.random(); // random number between zero and 1

10 * Math.random();  // 0 and 10
Math.floor();
Math.ceil();
Math.round( 10 * Math.random() );

// text, strings

"Jacob";
'Jacob';
`Jacob`; // backtick above tab on your keyboard

// string interpolation
"Jacob" + " " + "Tran"; // string concatenation
`A dozen eggs is ${ 6 + 6 }`;

"Jacob's House";
'"Hello", said Jacob';
"Jacob said, \"Hello!\"";


//
// memory
// variable
let result = 5 + 5;

let name = "Jacob";
var age = 39;
const PI = 3.14159;

// logic gating
let name = "Jacob";

if (1 > 2) {
  name = "Tam";
}

true; // boolean, true false


// operands
// > < >= <= == && || !=

let age = 1;

if (age > 38) {
  "old";
} else if (age > 18) {
  "young";
} else if (age > 10) {
  "really young";
} else if (age > 2) {
  "toddler";
} else {
  // default or catch all
  "infant";
}

// if else
// switch case
// ternary: single line condition
(age > 38) ? true : false;

// loops
// the computer doing the hard work
// brute force
1;
2;
3;
4;
5;
6;
7;
8;
9;
10;

// count to 1000
// while loop
// {} code block
let counter = 1;

console.log(5 + 5);
console.log(10 + 2);

// while (counter <= 10 && counter != 4) {
while (counter <= 10) {

  console.log(`${counter}: Hello`);

  if (counter == 4) {
    break;
  }

  counter++; // ++ operand
  // counter = counter + 1;
  // counter += 1
  // break; // pull the parachute
}

// for loop

// do while
// for each
// for of
// for in

let counter = 0;

while (counter <= 10) {
  console.log(`${counter}: Hello`);
  counter++;
}


// for loop
// for (init; condition; iterator)
for (let counter = 0; counter <= 10; counter++) {
  if (counter != 4) {
    console.log(`${counter}: Hello`);
  }
}
