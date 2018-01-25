// Assignment: [lab] Timing Functions

// 1. Change your page script to write to the page "Loading..." and then, 3 seconds later, "Hello, World!"
console.log("Loading...")
setTimeout(function() {
  console.log("Hello, World!")
}, 3000)


// 2. Write to the console: "Ready...", then "Set...", then "Go!", one second after another.
let readySetGo = ["Ready...", "Set...", "Go!"]

for(let i = 0; i <= readySetGo.length; i ++) {
  setTimeout(function() {
    console.log(readySetGo[i])
  }, 1000 * i)
}

for(let i in readySetGo) {
  setTimeout(function() {
    console.log(readySetGo[i])
  }, 1000 * i)
}


// 3. Stretch: Using the code in exercise 2. Make your webpage not the console display "Ready...", then "Set...", then "Go!", one second after another.
// This is the stretch right here... you havent learned to do this yet.
// you need to open index.html to see this take effect.
for(let i = 0; i < readySetGo.length; i ++) {
  setTimeout(function() {
    document.body.innerHTML = ''
    document.write(readySetGo[i])
  }, 1000 * i)
}


// 4. Make a counter using setInterval. Count from 1 up, every second.
let counter = 1
setInterval(function() {
  console.log(counter ++)
}, 1000)


// 5. Stretch: Create two counters, one for even numbers and one for odd. Run them at the same time.
let even = 1
setInterval(function() {
  even ++
  if (even % 2 === 0) {
    console.log('Even..', even)
  }
}, 1000)

let odd = 1
setInterval(function() {
  odd ++
  if (odd % 2 !== 0) {
    console.log('Odd..', odd)
  }
}, 1000)


// 6. Use setInterval to log '.' to the screen every 1 second. Stop after 10 seconds have passed.
// (Hint: Use setTimeout to stop things after 10 seconds)

for(let i = 1; i <= 10; i ++) {
  setTimeout(function() {
    console.log('.'.repeat(i))
  }, 1000 * i)
}


// 7. Stretch: Build a blast-off countdown using setInterval.
// 10 9 8 7 6 5 4 3 2 1 Blast Off!
let countdown = 1
let blastOff = setInterval(function() {
  console.log(countdown)

  if (countdown >= 10) {
    clearInterval(blastOff)
    console.log('Blast Off!')
  }

  countdown ++
}, 1000)
