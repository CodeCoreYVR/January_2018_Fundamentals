// Capitalize a string
// There is no capitalize method for Javascript strings.
// Write a function that capitalizes a given string.

// You haven't learned about functions and methods yet but the logic is the same.

// Define the string
let greeting = "hey buddy, how are you?"

// Capitalize the string with concatenation
let capitalized = greeting[0].toUpperCase() + greeting.substr(1)

// Alternatively you capitalize the string using interpolation
let capitalized = `${greeting[0].toUpperCase()}${greeting.substr(1)}`

// Print the capitalized string to the console
console.log(capitalized)
