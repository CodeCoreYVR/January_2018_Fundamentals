// make me a car object
// give it 3 properties:  make, model, capacity
// give it 3 methods: park, drive, stop
// test out your methods by console.log a message in each
// and executing them individually
const car = {
  // properties
  make: "Honda",
  model: "Odyssey",
  capacity: "7",
  // methods
  park: function() { console.log("I am self parking..."); return "yo!" },
  drive: function() { console.log("I am self driving...") },
  stop: function() { console.log("I am self breaking...") }
};

// test the object
console.log( car.make );
console.log( car.model );
console.log( car.capacity );
car.park();
car.drive();
car.stop();


const truck = new Object();
truck.make = "Ford";
truck.model = "F150";
truck.capacity = 4;
truck.park = function() { console.log("The truck is parking...") };
truck.drive = function() { return "The truck is driving..." };

// test the object
console.log( truck.make );
console.log( truck.model );
console.log( truck.capacity );
truck.drive();
truck.park();




//
