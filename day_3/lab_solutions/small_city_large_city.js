// Assignment: Small or Large city Edit Next Module
// Write a function that takes an object that looks like:
// cities = { vancouver: 603502, burnaby: 223220, langley: 104177 }
// and prints if the city is large (more than 150,000) or small (otherwise).
// The printout should look something like: vancouver is a large city

// [Stretch] Print the city name capitalized

bcCities = { vancouver: 603502, burnaby: 223220, langley: 104177 }

function citySize(cities) {
  for(const city in cities) {
    const capitalized = capitalize(city)

    if (cities[city] > 150000) {
      return `${capitalized} is a large city`
    } else {
      return `${capitalized} is a small city`
    }
  }
}

function capitalize(word) {
  word[0].toUpperCase() + word.substr(1)
}


// The below 2 ways of calling a function are exactly the same
citySize(bcCities)
citySize({ vancouver: 603502, burnaby: 223220, langley: 104177 })
