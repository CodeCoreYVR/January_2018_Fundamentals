// scope - the reach of a variable or function

// function expression
let jumping = function() {
  console.log("I am jumping...");
};

const mario = {
  profession: "plumber",
  age: 40,
  favouriteFood: "pizza",
  // methods
  asset: "mario.jpg",
  run: running,
  jump: jumping
};

// mario.run; // [Function]

const luigi = {
  profession: "plumber",
  age: 38,
  favouriteFood: "sushi",
  // methods
  asset: "luigi.jpg",
  run: running,
  jump: jumping
};


// shared methods
// function declartion, this running function is put in to the global namespace
function running() {
  console.log("start run animation");
  console.log("move along the x asis");
  console.log("check for collision");
  console.log("update timer");
  console.log("update score");
}



// test
mario.run();
luigi.run();
