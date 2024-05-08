/**
 * 
 */

// ADD CODE HERE
function createFunction() {
  function printStr() {
    return `hello world`
  }
  return printStr
}

// Uncomment these to check your work!
const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'