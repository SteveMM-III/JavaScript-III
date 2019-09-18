/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. With global binding the this refers to the window or console

* 2. With implicit binding this refers to the calling object listed before the dot

* 3. With new binding this refers to a new object created through a constructor function using the new keyword

* 4. With explicit binding this is defined by using call or apply methods
*
* write out a code example of each explanation above
*/

const log = msg => console.log(msg);


log('this.js - principle 1');
// Principle 1

// code example for Window Binding
log(this);

log('this.js - principle 2');
// Principle 2

// code example for Implicit Binding
const someObj = {
   name: 'random',
   greeting: function() {
      log(`I am ${this.name} and 'this' belongs to:`);
      log( this );
   }
};
someObj.greeting();

log('this.js - principle 3');
// Principle 3

// code example for New Binding
function Animal( type ) {
   this.type = type;
   this.query = function() {
      log( `I am a ${this.type} and 'this' belongs to:`);
      log( this );
   };
};
const dog = new Animal("dog");
dog.query();

// Principle 4

// code example for Explicit Binding
const cat = new Animal("cat");
const mouse = new Animal("mouse");
mouse.query.call(cat);