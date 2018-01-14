// Write a function that returns the most recurring letter in a string using javascript

function mostRecurring(str) {
  let letterObject = {};
  let result = ''
  let value = 0

  for (letter of str) {
    if (letterObject[letter] == undefined) {
      letterObject[letter] = 1;
    } else {
      letterObject[letter] += 1;
    }
  }

  for (key in letterObject) {
    if(letterObject[key] > value) {
      value = letterObject[key]
      result = key
    }
  }

  return result
};

mostRecurring('citizenship')

