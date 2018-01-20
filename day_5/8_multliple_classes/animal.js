// the class name is capitalized
class Animal {
  constructor( numOfLegs ) {
    // instance variables
    this.numOfLegs = numOfLegs;
    this.warmBlooded = true;
    this.name = "Spot";
    this.age = 2;
  }
}

let dog = new Animal( 4 );
dog.name;

let jane = new Animal( 2 );
jane.numOfLegs; // 2
// jane.numOfLegs = 2;
