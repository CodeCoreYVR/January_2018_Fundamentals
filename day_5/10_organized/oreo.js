// Oreo
const Cookie = require('./cookie.js');

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

module.exports = Oreo;
