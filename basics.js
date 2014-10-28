///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];

// Ans 1

for (var i=0; i < pets.length; i++) {
  console.log("I have a "+pets[i]);
}

// CORRECTION: Better way

// for (var i=0; length = pets.length; i < length; i++) {
//   console.log("I have a "+pets[i]);
// }

// CORRECTION: Mapping

// var reportPets = function(pet) {
//   return "I have a " + pet;
// }
// console.log(pets.map(reportPets));

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };

// Ans 2

friend.hairColor = 'green';

///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

var squarePlusOne = function(n){
  squared = n * n;
  return squared + 1;
};

// Ans 3

// `squared` will be interpreted to refer to the global variable
// in this function, which may be used elsewhere,
// and will be overwritten by the function.
// Declare it with `var` to keep it to a local scope.

// CORRECTION:
// - can also be overwritten by anyone

var squarePlusOne = function(n){
  var squared = n * n;
  return squared + 1;
};

///// Question 4
// Translate the Ruby method defined below into a JavaScript function.

/*
def greet(name, excited)
  greeting = "Hi, #{name} here!"
  if excited == true
    greeting.upcase
  else
    greeting
  end
end
*/

// Ans 4

var greet = function(name, excited) {
  var greeting = "Hi, " + name + " here!"
  if (excited == true) {
    return greeting.toUpperCase();
  } else {
    return greeting;
  }
}

///// Question 5
// Consider the following code.

var anna = {name: "Anna",
            age: 28,
            luckyNumber: function() {
              return this.age*2;
            }
          }

// Ans 5

// What is `anna`? (e.g. method, function, string, etc.)

// Ans: `anna` is an Object.

// What are `name`, `age`, and `luckyNumber`?

// Ans: they are properties.

// What does `this` refer to?

// Ans: the Object itself, `anna`.

// If you are in console.log and you want to see anna's lucky number, how would you do that?

// Ans

anna.luckyNumber();

// If you want to change anna's name to wurble, how would you do that?

// Ans

anna.name = 'wurble';