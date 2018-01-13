// strings
// a collection of characters
let name = 'Jacob';
// "J"-"a"-"c"-"o""b";

// strings and arrays are related
name[0]; // "J"
name[1]; // "a"
name[2]; // "c"
name[3]; // "o"
name[4]; // "b"

// length property
name.length; // 5

name[0] = "Y"; // "Yacob"
// fail silently

name = "Yacob";
name.unshift("Y"); // method doesn't exist


let letters = ["J", "a", "c", "o", "b"];
letters[0] = "Y";
console.log( letters );

console.log(`My name is ${ letter }`);

// string methods
let name = "Jacob";
name.split();  // ["Jacob"]
name.split("");  // ["J", "a", "c", "o", "b"]
name.split("c");  // ["Ja", "ob"]

// parsing
let csv = "Jacob,Tran,39,140";
csv.split(",");



let name = "Jacob";
let characters = name.split(""); // ["J", "a", "c", "o", "b"]
//name.split("")[0] = "Y";
characters[0] = "Y";
console.log(characters);

// join - is an array method
name = characters.join(""); // join returns a string



//






//
