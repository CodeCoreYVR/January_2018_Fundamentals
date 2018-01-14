// Assignment: [lab] Largest number and smallest number
// Write a function that takes in an array and returns array whose first
// element is the smallest number and whose second element is the largest number.

// For example if you call the function with array [3,64,3,56,34,12,5,0]
// you should get back an array [0, 64]

function smallestAndLargestNumber(numbers) {
  let smallest = numbers[0] // the first element is 3
  let largest = numbers[0] // the first element is 3

  for (element of numbers) {
    if(element > largest) {
      largest = element
    }

    if(element < smallest) {
      smallest = element
    }
  }
  return [smallest, largest]
};


let myArray = [3,64,3,56,34,12,5,0]

smallestAndLargestNumber(myArray)
smallestAndLargestNumber([3, 2, 1, 23, 3, 56, 34, 99, 12, 5, 0])
