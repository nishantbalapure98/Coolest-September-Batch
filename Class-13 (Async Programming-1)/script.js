// console.log('Start')

// function test(){
//     console.log('Hello')
// }
// test()

// console.log('End')

// console.log('Start')

// function sayHello(){
//     console.log("Hello")
// } // 2-3 seconds


// function sayBye(){
//     console.log('Bye')
// }


// setTimeout(sayHello , 3000)
// setTimeout(sayBye , 3000)
// console.log('End')

// Import the 'fs' module
const fs = require("fs");

console.log('Before'); // This will be printed first

// Read file asynchronously (non-blocking)
fs.readFile('f1.txt', (err, data) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  
  console.log('This is File 1 data -> ' + data); // This is printed when the file is read
});

console.log('After'); // This will be printed before the file is read