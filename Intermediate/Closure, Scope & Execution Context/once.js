/**
 * Write a function once that accepts a callback as input and returns a function.
 *  When the returned function is called the first time,
 *  it should call the callback and return that output.
 *  If it is called any additional times, instead of calling
 *  the callback again it will simply return the output value from the first time
 *  it was called.
 */


const once = (cb) => {
  let isCalled = false;
  let resule;

  return (num) => {
    if (!isCalled) {
      isCalled = true;
      resule = cb(num);
    };
    return resule
  }
}

const addByTwoOnce = once((n) => n + 2)

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  // should log 7
console.log(addByTwoOnce(10)); // should log 7
console.log(addByTwoOnce(9001));  // should log 7