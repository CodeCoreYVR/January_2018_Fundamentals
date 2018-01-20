// inheritance
// animal may be born with some instincts
// extends
// cookies
class Cookie {
  constructor( sugar, flour ) {
    this.sugar = sugar / 2;
    this.flour = flour;
    // this.filling = filling;
  }

  bake() { console.log("baking the cookie") }
  eat() { console.log("eating the cookie") }
}

class Oreo extends Cookie {
  constructor( sugar, flour, filling ) {
    // this.sugar = sugar;
    // this.flour = flour;
    // super - allows you to call the same method from your ancestor
    super( sugar, flour );
    this.filling = filling;
  }

  dip() { console.log("Dip in milk") }
}

let lowFat = new Cookie(0, 5);
lowFat.bake();
lowFat.dip(); // throws an error
lowFat.eat();

let oreo = new Oreo(35, 25, "vanilla");
oreo.bake();
oreo.dip();
oreo.eat();
