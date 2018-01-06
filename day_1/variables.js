// let enables us to define a variable that may change it's assignment in
// the future
let name = 'John'; // 👈 this is called declaring the variable
name = 'Alex';

// consts enables us to define a variable that may not be reassigned later
const name = 'John';
name = 'Alex'; // This will give you an error

// in terms of best practices, you should `const` all the times unless you
// expect the variable to change

// with `let` or `const` you can't re-declare the variable
let a = 1;
a = 2; // this is ok
let a = 3; // this will error

// when naming variable you can use letters, numbers and underscore but you
// must start with a letter

// it terms of best practices, you should name you variables using camel case
// convention which means if the variable name is composed of multiple words
// then start with a lower case, omit spaces and capitalize the first letter of
// every subsequent word. Here are examples:
let firstName = 'Tam'; // this is good
let firstname = 'John'; // this is not good (although it works)
let first_name = 'John'; // this is not good (although it works)


// var is inherited from ES5 and before, it has different scoping behaviour
// than let and const (more on that later), if you're using ES6 it's best to
// ingore `var` and stick with using `let` and `const` only
