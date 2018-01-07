// Assignment: Letters printing
// Write a piece of Javascript code that prints letters from a to z as such:
// a
// bb
// ccc
// dddd
// eeeee
// ....
// [hint]: You can get a letter using String.fromCharCode(i) where i is a number.
// If i is 65 then the letter is A

// Checkout https://www.w3schools.com/charsets/ref_html_ascii.asp

// Solution 1: Using the new repeat method
let counter = 1

for(let char = 97; char <= 122; char ++) {
  console.log(String.fromCharCode(char).repeat(counter))
  counter ++
}


// Solution 2: Old School JavaScript way, nested loops.

let counter = 1

for(let char = 97; char <= 122; char ++) {
  let letter = String.fromCharCode(char)
  let result = ""

  for(let i = 1; i <= counter; i ++) {
    result += letter
  }

  counter ++

  console.log(result)
}
