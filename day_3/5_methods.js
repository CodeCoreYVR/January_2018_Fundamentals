// methods, another name for a function
// method is associated with a class or an object
// array it's parent is an object

let shoppingList = ["milk", "eggs", "cheese"];
shoppingList.push("butter"); // adds an item to the end of the list
shoppingList.push("beer"); // adds an item to the end of the list
shoppingList.push("chips"); // adds an item to the end of the list


//    0       1        2          3         4      5
// [ 'milk', 'eggs', 'cheese', 'butter', 'beer', 'chips' ]
shoppingList[6] = "dip";
// shoppingList[7] = undefined;
// shoppingList[8] = undefined;
// shoppingList[9] = undefined;
shoppingList[10] = "popcorn";

//
// function push( item ) {
//  // adds the item to the end of the list
    // return the length of the list
// }

// function log() {
//   // no return
// }
// slice
// pop
shoppingList.pop(); // removes the last item on the list
console.log( shoppingList );
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


shoppingList.pop(); // remove item from end
shoppingList.shift(); // remove item from start
shoppingList.unshift("juice"); // add an item to the start
console.log( shoppingList );






//
