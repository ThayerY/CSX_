/**
 * Declare a function Dog that creates a new instance of a Dog object when
 *  invoked with the new keyword. Each Dog object
 *  should have a name property and a breed property,
 *  both strings which are passed in as arguments when
 *  calling the Dog function. It should also have
 *  a property called tricks, set to an array representing
 *  all the tricks that dog knows. When a new object is initiated,
 *  tricks should be empty.

All of your Dog objects must also have access to two methods that are stored
 on the constructor's prototype:

The first method, learnTrick,
 should take in a string as an argument and add that string to
  the tricks array of the particular Dog object it was called on.

The second method, performTrick,
 should also take a string as an argument.
  It should check to see if that string is in 
  the tricks array belonging to the Dog instance it was called on; if so,
   it should log the string 'name performed trick!' If not,
    log the string 'name doesn't know that trick. 
*/

//solved with (prototype)

function Dog(name, breed) {
  // add code here
  this.name = name;
  this.breed = breed;
  this.tricks = [];

  // Method to learn a new trick
  Dog.prototype.learnTrick = function (trick) {
    this.tricks.push(trick);
  };

  // Method to perform a trick
  Dog.prototype.performTrick = function (trick) {
    if (this.tricks.includes(trick)) {
      console.log(`${this.name} performed ${trick}!`);
    } else {
      console.log(`${this.name} doesn't know that trick.`);
    }
  };
}


const fido = new Dog('Fido', 'poodle');

// Uncomment these lines to check your work!
fido.learnTrick('fetch');
fido.performTrick('fetch'); // should log 'Fido performed fetch!'
fido.performTrick('sit'); // should log 'Fido doesn't know that trick.'

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

// soveed with (Class)
class Dog_1 {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.tricks = [];
  }

  // Method to learn a new trick
  learnTrick_1(trick) {
    this.tricks.push(trick);
  };

  // Method to perform a trick
  performTrick_1(trick) {
    if (this.tricks.includes(trick)) {
      console.log(`${this.name} performed ${trick}!`);
    } else {
      console.log(`${this.name} doesn't know that trick.`);
    }
  };
}


const fido_1 = new Dog_1('Fido', 'poodle');

// Uncomment these lines to check your work!
fido_1.learnTrick_1('fetch');
fido_1.performTrick_1('fetch'); // should log 'Fido performed fetch!'
fido_1.performTrick_1('sit'); // should log 'Fido doesn't know that trick.'