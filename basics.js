///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];
var loop = pets.length();

for (l = 0; l < pets.length; l++) {
console.log("I have a " + pet[l])
};

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };
friends[2] = "green"

///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

var squarePlusOne = function(n){
  squared = n * n;
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

///// Question 5
// Consider the following code.

var anna = {name: "Anna",
            age: 28,
            luckyNumber: function() {
              return this.age*2;
            }
          }

// What is `anna`? (e.g. method, function, string, etc.)

// string

// What are `name`, `age`, and `luckyNumber`?

// this is a hash

// What does `this` refer to?

// reffrences the parent object.

// If you are in console.log and you want to see anna's lucky number, how would you do that?

// anna.luckyNumber()

// If you want to change anna's name to wurble, how would you do that?

anna[0] = "wurble"
