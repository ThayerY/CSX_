/*
https://csx.codesmith.io/units/callbacks/challenge-count-by

  Challenge: countBy
  Create a function countBy that accepts an array and a callback,
   and returns an object. countBy will iterate through the array
    and perform the callback on each element. Each return value
     from the callback will be saved as a key on the object.
      The value associated with each key will be the number of
       times that particular return value was returned.
       new one
*/
//--------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

// ADD CODE HERE
const countBy1 = (array, callback) => {
  return array.reduce((obj, item) => {
    let result = callback(item);
    obj[result] ? (obj[result] = obj[result] + 1) : (obj[result] = 1)
    return obj
  }, {})

}

const arr1 = [1, 2, 3, 4, 5];
const callback1 = num => num % 2 === 0 ? 'even' : 'odd';
console.log(countBy1(arr1, callback1)); // Output: { odd: 3, even: 2 }


//--------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
const countBy2 = (array, callback) => {
  // Initialize an empty object to store the counts
  let counts = {};

  // Iterate through the array
  array.forEach(element => {
    // Apply the callback to each element
    let key = callback(element);

    // If the key doesn't exist in the counts object, initialize it to 1
    // Otherwise, increment its count by 1
    counts[key] = (counts[key] || 0) + 1;
  });

  // Return the counts object
  return counts;
}

// Example usage:
const arr2 = [1, 2, 3, 4, 5];
const callback2 = num => num % 2 === 0 ? 'even' : 'odd';
console.log(countBy2(arr2, callback2)); // Output: { odd: 3, even: 2 }


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
// with reduce long
const countBy3 = (array, callback) => {
  return array.reduce((counts, current) => {
    // Apply the callback to the current element
    let key = callback(current);

    // If the key doesn't exist in the counts object, initialize it to 1
    // Otherwise, increment its count by 1
    counts[key] = (counts[key] || 0) + 1;

    return counts;
  }, {});
}

// Example usage:
const arr3 = [1, 2, 3, 4, 5];
const callback3 = num => num % 2 === 0 ? 'even' : 'odd';
console.log(countBy3(arr3, callback3)); // Output: { odd: 3, even: 2 }

//------------------------------------------------------------------------------
// with reduce short
const countBy4 = (ar, cb) => ar.reduce((co, cur) => (co[cb(cur)] = (co[cb(cur)] || 0) + 1, co), {})

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy4(nums, evenOdd)); // should log: { odd: 3, even: 2 }
