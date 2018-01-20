// mapping again...
// function doSomething() {}
[1, 2, 3].forEach( function( element ){
  console.log(element * 2);
});


// mapping([1,2,3]);
// mapping(numbers);

// higher order functions built into JAVASCRIPT
// timing Functions
// setInterval(fn, delay); // will continue to call
// setTimeout(fn, delay); // will only call once

// delay is in ms, 1000ms = 1sec
function sayHi() {
  console.log("Hi!");
}
setTimeout( sayHi, 1000 );

setTimeout( function(){
  console.log("Hi!");
}, 1000 );

let counter = 0;
let id = setInterval( function(){
  console.log("Hi!" + id);
  counter++;
  if (counter > 10) {
    clearInterval(id);
  }
}, 1000 );

let id2 = setInterval( function(){
  console.log("Hi!" + id2);
  counter++;
  if (counter > 10) {
    clearInterval(id2);
  }
}, 1000 );

let id3 = setInterval( function(){
  console.log("Hi!" + id3);
  counter++;
  if (counter > 10) {
    clearInterval(id3);
  }
}, 1000 );

// the order is
setTimeout(function(){ console.log("fries") }, 3000);
setTimeout(function(){ console.log("milkshake") }, 5000);
setTimeout(function(){ console.log("steak") }, 500);



//
function doSomething() {
  console.log("hi");
  clearInterval(id);
}

let id = setInterval( doSomething, 1000 );

setInterval( function() {
  // instructions go here
} , 1000);








//
