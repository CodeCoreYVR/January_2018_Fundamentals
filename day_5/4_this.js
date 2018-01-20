// this - what is this?
// is a question, who are we, where are we in? who called us? who do we belong to?

let speed = 20;

const car = {
  // properties
  make: "Porsche",
  model: "Boxter",
  capacity: 2,
  speed: 50,
  // methods
  drive() { console.log(`I'm driving at ${ this.speed }km/h`) },
  stop() { console.log("I'm stopping, my speed is now 0km/h") },
  park() { console.log("I'm parking, my speed is 5km/h") },
};


// test
console.log( car.make );
console.log( car.model );
console.log( car.capacity );
console.log( car.speed );
car.drive();



//
