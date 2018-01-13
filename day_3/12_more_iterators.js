// more iterators
// for .. in
for (let property in object) {

}

const me = {
  name: "Jacob",
  age: 39
};

for (let property in me) {
  console.log(`The property name is: ${ property }`);
  // console.log(me.property);
  console.log(`The value is: ${ me[ property ] }`);
}

// let customProperty = 'name';
// me[ customProperty ];
// me[ "name" ]; // "Jacob"


let mom = {
  name: "Julia",
  baby: {
    name: "Sienna"
  }
}

mom.name;
mom.baby.name;

for (let property in mom) {
  let value = mom[ property];

  if (typeof value  == "object") {
    for (let property in value) {
      console.log( value[property] ); // baby's name
    }
  // } else if (Array.isArray(value)) {
  //   for ( of ) {}
  //
  } else {
    console.log( value ); // mom's name
  }

  // for (let innerProperty in property) {
  //   console.log(property[ innerProperty ]);
  // }
}







//
