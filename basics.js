///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];

for (var pet in pets) {
  console.log("I have a " + pet);
}

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };

friend.hairColor = 'green';
console.log(friend.hairColor);

///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

// the variable squared doesn't have a var in front of it
var squarePlusOne = function(n){
  var squared = n * n;
  return squared + 1;
};

console.log(squarePlusOne(4));
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

var greet = function(name, excited) {
  var greeting = "Hi, " + name + " here!";
  if (excited === true) {
    return greeting.toUpperCase();
  } else {
    return greeting;
  };
}

console.log(greet('Ross', true));

///// Question 5
// Consider the following code.

var anna = {name: "Anna",
            age: 28,
            luckyNumber: function() {
              return this.age*2;
            }
          }

// What is `anna`? (e.g. method, function, string, etc.)

// anna is an object

// What are `name`, `age`, and `luckyNumber`?

// parameters?

// What does `this` refer to?

// this refers to the object that it is being called

// If you want to return the value of anna's lucky number, how would you do that?

console.log(anna.luckyNumber());

// If you want to change anna's name to "wurble", how would you do that?

anna.name = "wurble"
console.log(anna.name)
