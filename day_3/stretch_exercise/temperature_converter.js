// Assignment: Temperature Convertor
// Write a function that takes in a temperature in celsius and returns the
// temperature in Fahrenheit rounded to one decimal point.
// The formula to convert Celsius to Fahrenheit is: F = C * 9/5 + 32
// For example, if the input is 23 the function should return 73.4

function tempConvertor(celsius) {
  return celsius * 9/5 + 32
}

tempConvertor(23)


// [Stretch 1]
// Make the function take an array of temperatures and returns the conversion
// results in an array as well.
// For example, if the input of the function is [23, 26, 30] the function
// should return [73.4, 78.8, 86]
function tempConvertor(temperatures) {
  let result = []
  for(let celsius of temperatures) {
    result.push(celsius * 9/5 + 32)
  }

  return result
}

tempConvertor([23, 26, 30])


// [Stretch 2]
// Make the function take an object of temperatures and returns the conversion
// results in an object as well.

// For example, if the input of the function is
// { vancouver: 23, burnaby: 26, seattle: 30 }
// the function should return
// { vancouver: 73.4, burnaby: 78.8, seattle: 86 }

let temperatureObject = { vancouver: 23, burnaby: 26, seattle: 30 }

function tempConvertor(temperatureObject) {
  let result = {}

  for(const city in temperatureObject) {
    result[city] = temperatureObject[city] * 9/5 + 32
  }

  return result
}

tempConvertor(temperatureObject)


// [Stretch 3]
// Make the function accept any of the options above (number, array or object)
// and return the appropriate result.
function celsiusToFahrenheit(celsius) {
  return celsius * 9/5 + 32
}

function convertArrayTemperatures(temperatures) {
  let result = []
  for(let celsius of temperatures) {
    result.push(celsius * 9/5 + 32)
  }

  return result
}

function convertObjectTemperatures(temperatures) {
  let result = {}

  for(const city in temperatureObject) {
    result[city] = celsiusToFahrenheit(temperatureObject[city])
  }

  return result
}

function tempConvertor(temperature) {
  if (temperature.constructor === Object) {
    return convertObjectTemperatures(temperature)
  } else if (temperature.constructor === Array) {
    return convertArrayTemperatures(temperature)
  } else if (temperature.constructor === String) {
    return celsiusToFahrenheit(temperature)
  } else {
    return 'I dont know how to do that'
  }
}

tempConvertor(23)

