/*
  Challenge: countBy
  Create a function countBy that accepts an array and a callback,
   and returns an object. countBy will iterate through the array
    and perform the callback on each element. Each return value
     from the callback will be saved as a key on the object.
      The value associated with each key will be the number of
       times that particular return value was returned.
       new one
*/

// ADD CODE HERE
function countBy(array, callback) {
  return array.reduce((obj, item) => {
    let result = callback(item);
    obj[result] ? (obj[result] = obj[result] + 1) : (obj[result] = 1)
    return obj

  }, Object.create(null))

}

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
