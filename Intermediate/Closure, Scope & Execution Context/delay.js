/**
 * Challenge: delay 
 * 
 * Write a function delay that accepts two arguments,
 * a callback and the wait time in milliseconds.
 *  Delay should return a function that,
 *  when invoked waits for the specified amount of time before executing.
 *  HINT - research setTimeout();
 */


// ADD CODE HERE

const delay_ = (cb_, wt_) => {
  return () => setTimeout(cb_, wt_)
}

let count_ = 0;
const delayedFunc_ = delay_(() => count_++, 1000);
delayedFunc_();
console.log(count_); 												 // should print '0'
setTimeout(() => console.log(count_), 1000); // should print '1' after 1 second


//short solution
const delay = (cb, wt) => () => setTimeout(cb, wt)



// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); 												 // should print '0'
setTimeout(() => console.log(count), 9000); // should print '1' after 1 second