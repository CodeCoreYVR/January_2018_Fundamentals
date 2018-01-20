// Cookie
/*
 * @author Jacob Tran
 * @def Describe the class
 * @sugar Describe sugar parameter
 *
 */
class Cookie {
  constructor( sugar, flour ) {
    this.sugar = sugar / 2;
    this.flour = flour;
    // this.filling = filling;
  }

  bake() { console.log("baking the cookie") }
  eat() { console.log("eating the cookie") }
}

// step 1: module.export
module.exports = Cookie;
