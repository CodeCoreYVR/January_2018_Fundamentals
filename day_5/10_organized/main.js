// Main
// inheritance
// animal may be born with some instincts
// extends
// cookies

// step 2: require from your main
// ./ == root
const Cookie = require('./cookie.js');
const Oreo = require('./oreo.js');

let lowFat = new Cookie(0, 5);
lowFat.bake();
//lowFat.dip(); // throws an error
lowFat.eat();

let oreo = new Oreo(35, 25, "vanilla");
oreo.bake();
oreo.dip();
oreo.eat();
