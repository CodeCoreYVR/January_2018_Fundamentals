const mom = {
  name: "Madonna",
  age: 65,
  baby: {
    name: "Lordes",
    age: 20
  }
};

// what is madonna's baby's name?
mom.baby.name;
mom.baby.age;

mom.baby; // {}, object
console.log(`Madonna's Baby's name is: ${mom.baby.name}`);


// madonna's kids
let kids = [
  "Lordes",
  "Jacob",
  "Jason",
  "Tam",
  "Steve"
];

let kids = [
  { name: "Lordes", age: 20 },
  { name: "Jacob", age: 39 },
  { name: "Jason", age: 21 },
  { name: "Tam", age: 35 },
  { name: "Steve", age: 30 }
];


// what is the name of the first kids on my list
kids.name[0];
kids[0].name;

// what is the age of the last kids on my list
kids[4].age;

kids = []; // array has a property called length
kids.length; // the number of kids in my array

// because arrays are zero-based
kids[kids.length-1].age;





















//
