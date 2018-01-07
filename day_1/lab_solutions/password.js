// Assignment: [Lab] Password Checker
// Ask the user for a password in a variable called ‘password` then:
// If the password is longer than 12 characters, log to the console "Too long!".
// If the password is less than 8 characters, log to the console "Too short!".
// Otherwise, log to the console "Just right!".

// Ask the user for a password
let password = prompt('please enter your password');

// Find the length of the password and check it against a condition
if(password.length > 12) {
  alert('Too Long');
} else if(password.length < 8) {
  alert('Too Short');
} else {
  alert('Just Right')
}
