///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];
function animalArray(){
  for (var i=0; i < pets.length; i++){
    console.log("I have a " + pets[i]);
  }
};
animalArray();

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };
friend.haircolor = null;
console.log(friend);

///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

//  'squared' is being built as a global variable, which is bad practice

function squarePlusOne(n){
  var f = (n * n) + 1;
  return f;
};

///// Question 4
// Translate the Ruby method defined below into a JavaScript function.


function greet(name, excited){
  var greeting = "Hi, " + name + " here!"
  if excited === true {
      greeting.uppercase;
  } else {
    greeting;
  }
};

///// Question 5
// Consider the following code.

var anna = {name: "Anna",
            age: 28,
            luckyNumber: function() {
              return this.age*2;
            }
          }

// What is `anna`? (e.g. method, function, string, etc.)

//an object

// What are `name`, `age`, and `luckyNumber`?

//object properties

// What does `this` refer to?

// like self in ruby

// If you want to return the value of anna's lucky number, how would you do that?

//anna.luckynumber();

// If you want to change anna's name to "wurble", how would you do that?

//anna.name......something
