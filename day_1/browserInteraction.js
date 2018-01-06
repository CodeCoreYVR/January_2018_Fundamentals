// Prompt the user for their name then print to the console: "Hello, Bob! In case you forgot, 3 x 4 is 12." Use variables for your name, a, b, and result. Also, try to do it with string interpolation

const name = prompt('What is your name?');
const a = 3;
const b = 4;
const result = a * b;
console.log(`Hello ${name}, in case your forgot ${a} X ${b} is ${result}`);
