/**
 * after
 * Write a function after that takes the number of times the callback needs to be
 *  called before being executed as the first parameter and the callback as
 *  the second parameter.
 */

// you tube solution for this ⬇️
// https://www.youtube.com/watch?v=thmw-aEuQe0&t=429s&ab_channel=Codesmith

// ADD CODE HERE
const after = (n, cb) => {
  let counter = 0

  return (...args) => {
    counter++
    if (counter >= n) {
      return cb(...args)
    }
  }
}


const called = function (string) { return ('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed