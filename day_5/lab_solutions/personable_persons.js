// Assignment: [Lab] Personable Persons
// Create two person objects with an "age" attribute and a "name" attribute.
// Then, add a "greet" method to both people. The method should accept a person
// as a parameter and outputs the following:

// "Hello, [name1]. I am [name2]. Pleased to meet you." if person1 is older than person2.
// "Yo [name2]. I'm totally [name1]. Wsup!." if person2 is older than person1.

// https://www.w3schools.com/js/js_object_definition.asp


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet(friend) {
    if (friend.age > this.age) {
      console.log(`Yo ${friend.name}. I'm totally ${this.name}. Wsup!.`)
    } else {
      console.log(`Hello, ${friend.name}. I am ${this.name}. Pleased to meet you.`)
    }
  }
}

jennie = new Person('Jennie', 25)
jocelyn = new Person('Jocelyn', 23)

jennie.greet(jocelyn)
jocelyn.greet(jennie)



// Joel's way of creating objects

// This is our greet function, it is the same as above.
// it takes in one argument friend, which we expect it to be an Object with
// name and age properties friend represents the person you are greeting.
// IMPORTANT: We will be assigning this greet function to each person object
function greet(friend) {
  // here we check if our friend is older than current person object
  // when we assign greet to a person object, 'this' refers to the object
  // greet got assigned to
  if (friend.age > this.age) {
    return(`Yo ${friend.name}. I'm totally ${this.name}. Wsup!.`)
  } else {
    return(`Hello, ${friend.name}. I am ${this.name}. Pleased to meet you.`)
  }
}

// Here we are creating 2 objects, each with a name and age property
// We also assign the greet function to a property named greet
// The function becomes, a method because it is defined inside an object
// The keyword 'this' refers to the object itself

// Object Creation Method 1
// Explicitly creating an object, and assigning properties individually
let brian = {}
brian.name = "Brian"
brian.age = 22
brian.greet = greet

// Object Create Method 2
// Create an object and assign properties as the same time
let joel = {name: 'Joel', age: 25, greet: greet}

// Execute our greetings
brian.greet(joel)
joel.greet(brian)
