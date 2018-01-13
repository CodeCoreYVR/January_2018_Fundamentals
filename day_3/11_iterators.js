// iterators - to iterate
// loop repeat
// while
// for
// do..while

// arrays
let shoppingCart = ["USB-C Cable", "Kindle", "Pillow"];

shoppingCart[0];
shoppingCart[1];
shoppingCart[2];

// for..of is specifically for arrays
for (let element of array) {

}

for (let item of shoppingCart) {
  console.log(`You have placed a(n) ${ item } into your shopping cart!`);
}

let sales = [19.99, 349.00, 30.00];
let total = 0;

for (let sale of sales) {
  total += sale;
  // total = total + sale;
}

console.log(`The total cost of your shopping cart is: $${ total }`);

//
let tictactoe = [
  ["X", "X", "X"],
  ["X", "O", "O"],
  ["O", "O", "X"]
];

// flattening
for (let row of tictactoe) {
  //console.log(row);

  for (let col of row) {
    console.log(col);
  }
}

// rubix cubes
for (let face of cube) {
  for (let row of face) {
    for (let col of row) {

    }
  }
}

// history
for (let state of time) {
  for (let face of cube) {
    for (let row of face) {
      for (let col of row) {
      }
    }
  }
}


// for..of     0       1      2
let sales = [19.99, 349.00, 30.00];

for (let i=0; i<sales.length; i++) {
  console.log(`index: ${i}`); // indexes or addresses
  console.log(`value:  ${sales[i]}`);
}

// tictactoe
for (let row=0; row<tictactoe; row++) {
  console.log(`index: ${row}`); // indexes or addresses
  console.log(`value:  ${tictactoe[row]}`);

  for (let col=0; col<tictactoe[row].length; col++) {
    console.log(`index: ${col}`); // indexes or addresses
    console.log(`value:  ${tictactoe[row][col]}`);
  }
}











//
