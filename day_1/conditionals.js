const number = Math.floor( Math.random() * 100);
console.log(number);

if (number > 75) {
  console.log('The number is large');
} else if(number > 50) {
  console.log('The number is medium');
} else if(number > 20) {
  console.log('The number is small');
} else {
  console.log('The number is very small');
}

// notes about conditional:
// 1- you always need `if` with a condition that ideally gives true/false
// 2- you can optionally have one or more `else if` after the `if` which must
//    also have a condition that returns true/false
// 3- you can optionally have one at most `else` at the very end if none of
//    the conditions previously defined wit `if` or `else if` are met
// 4- you will only have one of those block executed and the execution will
//    always work from top to bottom
