// objects + complexity
const me = {
 name: "Jacob",
 age: 39,
 // hobby: "Rock Climbing"
 hobbies: ["Rock Climbing", "BJJ", "Road Biking"],
 skills: ["Programming", "Public Speaking", "Robotics"]
};

me.name = "Prince"; //accessor: setter
me.name; // accessor: getter

me.name = "Symbol";
me.name;

me.hobbies; // []
me.hobbies[2]; // "Road Biking"

me.skills; // []
me.skills[0]; // "Programming"
