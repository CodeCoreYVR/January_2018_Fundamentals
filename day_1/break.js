while(true) {
  let x = Math.floor(Math.random() * 100);
  if(x % 2 === 0) {
    console.log(`your lucky even number is ${x}`);
    break;
  } else {
    console.log(x);
  }
}
