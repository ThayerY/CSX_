/**
 * 
 */

const addByX = x => add => x + add

const addByTwo = addByX(2)
console.log(addByTwo(1)) // --> 3
console.log(addByTwo(2)) // --> 4
console.log(addByTwo(3)) // --> 5


const addByThree = addByX(3)
console.log(addByThree(1)) // --> 4
console.log(addByThree(2)) // --> 5


const addByFour = addByX(4)
console.log(addByFour(4)) // --> 8
console.log(addByFour(10)) // --> 14
