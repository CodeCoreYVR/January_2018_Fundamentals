const carYear = parseInt(prompt('What year is the car from?'));

if(carYear >= 2018) {
  console.log('Future');
} else if(carYear > 2013) {
  console.log('New');
} else if(carYear > 2000) {
  console.log('Old');
} else {
  console.log('Very old');
}
