///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];

for (var p in pets){
  console.log("I have a " + pets[p]);
};

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };

friend.hairColor = "green";
console.log(friend);

///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

// it's a bit problematic because you're not really adding one inside of the function, instead returing a square then adding 1 to the return value.  Also assigning a variable
var squarePlusOne = function(n){
  var squared = (n * n) + 1;
  return squared;
};

console.log(squarePlusOne(2))
///// Question 4
// Translate the Ruby method defined below into a JavaScript function.

var greet = function(name,excited){
  greeting = "Hi " + name + " here!";
  if (excited === true){
    return greeting.toUpperCase();
  } else {
    return greeting
  };
};

console.log(greet("Bob", true));
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

///// Question 5
// Consider the following code.

var anna = {name: "Anna",
            age: 28,
            luckyNumber: function() {
              return this.age*2;
            }
          }

// What is `anna`? (e.g. method, function, string, etc.)
// local variable


// What are `name`, `age`, and `luckyNumber`?
//properties of the object anna


// What does `this` refer to?
// the current object


// If you want to return the value of anna's lucky number, how would you do that?
// console.log(anna.luckyNumber());


// If you want to change anna's name to "wurble", how would you do that?
// anna.name = "wurble";
