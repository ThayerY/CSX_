/**
 * Create a function groupBy that accepts an array and a callback,
 *  and returns an object. groupBy will iterate through the array
 *  and perform the callback on each element. Each return value
 *  from the callback will be saved as a key on the object.
 *  The value associated with each key will be an array consisting
 *  of all the elements that resulted in that return value when
 *  passed into the callback. 
*/


// ADD CODE HERE

const groupBy0 = (ar, cb) => {
  let obj = {}
  for (let i of ar) {
    let key = cb(i)
    if (!obj[key]) obj[key] = []
    obj[key].push(i)
  }
  return obj
}

const decimals0 = [1.3, 2.1, 2.4];
const floored0 = function (num) { return Math.floor(num); };
console.log(groupBy0(decimals0, floored0)); // { 1: [1.3], 2: [2.1, 2.4] }

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//long solution with reduce
const groupBy = (ar, cb) => {
  return ar.reduce((acc, curr) => {
    const key = cb(curr);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(curr);
    return acc;
  }, {});
}

const decimals = [1.3, 2.1, 2.4];
const floored = function (num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // { 1: [1.3], 2: [2.1, 2.4] }


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

// short solution with reduce
const groupBy1 = (ar, cb) => ar.reduce((ac, cur) => (!ac[cb(cur)] ? ac[cb(cur)] = [] : null, ac[cb(cur)].push(cur), ac), {})
// Uncomment these to check your work!
const decimals_1 = [1.3, 2.1, 2.4];
const floored_1 = function (num) { return Math.floor(num); };
console.log(groupBy1(decimals_1, floored_1)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
