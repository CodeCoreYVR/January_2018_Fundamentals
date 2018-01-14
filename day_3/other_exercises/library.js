// Assignment: Sort your books
// Write some code that keeps asking the user for book names until the user
// enters "exit". After typing exit the program should display all the entered
// book names sorted by the book name.

let library = []

while(true) {
  let book = prompt('Please enter a book name: ')

  if (book.toLowerCase() === 'exit' || book === '') {
    break;
  } else {
    library.push(book)
  }
}

console.log(library.sort().join(', '))
