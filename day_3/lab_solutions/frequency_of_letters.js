// Assignment: [lab] Frequency of Letters
// Write a function that prompts the user to enter a sentence and then return an
// object whose keys are the letter and values are the number of occurrences of
// that letter, for example, if the user enters hello world,
// it will return: {h: 1, e: 1, l: 3, o: 2, w: 1, d: 1}

function frequencyOfLetters(sentence) {
  let result = {}

  for(let letter of letters) {
    if(result[letter]) {
      result[letter] ++
    } else if (letter != ' ') {
      result[letter] = 1
    }
  }

  return result
}

frequencyOfLetters('hello world')
