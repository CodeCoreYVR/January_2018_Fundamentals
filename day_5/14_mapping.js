// mapping
// higher order + data structures
doubleIt( 10 ); // 20
doubleIt( 40 ); // 80

function doubleIt( number ) {
  return number * 2;
}

doubleIt(11); // 22
doubleIt(34); // 68
doubleIt(99); // 198

let numbers = [11, 34, 99];

doubleIt(numbers[0]);
doubleIt(numbers[1]);
doubleIt(numbers[2]);

let numbers = [11, 34, 99];
//for .. of

for (let number of numbers) {
  doubleIt(number);
}

// higher order function
let numbers = [11,34,99];
doubleEverything( doubleIt, numbers ); // [22, 68, 198]

// mapping
function doubleEverything( fn, array ) {
  let results = [];

  for (let element of array) {
    results.push( fn( element ) );
  }
  // doubleIt( array[0] );
  // doubleIt( array[1] );
  // doubleIt( array[2] );
  return results;
}






//
