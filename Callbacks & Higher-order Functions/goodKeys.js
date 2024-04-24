/**
 * https://csx.codesmith.io/units/callbacks/challenge-good-keys
 * 
 * Create a function goodKeys that accepts an object and a callback.
 *  The callback will return either true or false. goodKeys will
 *  iterate through the object and perform the callback on each value.
 *  goodKeys will then return an array consisting only
 *  the keys whose associated values yielded a true return value from the callback.
 */


// ADD CODE HERE

const goodKeys = (obj, cb) => {
  const keys = [];
  for (const key in obj) {
    if (cb(obj[key])) {
      keys.push(key);
    }
  }
  return keys;
}

// Uncomment these to check your work!
const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

//-------------------------------------------------------------------------------
//--------------------------------------------------------------------------------

const goodKeys_1 = (obj, callback) => {
  return Object.keys(obj).reduce((result, key) => {
    if (callback(obj[key])) {
      result.push(key);
    }
    return result;
  }, []);
}

const sunny_1 = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };

function startsWithBird(str) {
  return str.slice(0, 4).toLowerCase() === 'bird';
}
console.log(goodKeys_1(sunny_1, startsWithBird)); // should log: ['charlie', 'dee']

//--------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

//short reduce solution
const goodKeys_2 = (obj, cb) => Object.keys(obj)
  .reduce((res, key) => (cb(obj[key]) ? res.push(key) : res, res), [])


const sunny_2 = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };

function startsWithBird(str) {
  return str.slice(0, 4).toLowerCase() === 'bird';
}
console.log(goodKeys_2(sunny_2, startsWithBird)); // should log: ['charlie', 'dee']
