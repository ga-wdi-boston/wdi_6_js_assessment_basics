///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];

console.log(pets.each)
///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };
this.hairColor = 'green'

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
//'anna is a variable.'

// What are `name`, `age`, and `luckyNumber`?
// 'name', 'age', and 'luckyNumber' are object literals.

// What does `this` refer to?
// 'this' refers to returning the object literal from the constructor function, meaning this.age, will return the age specified in the constructor function.

// If you want to return the value of anna's lucky number, how would you do that?
//this.luckyNumber

// If you want to change anna's name to "wurble", how would you do that?
// this.name = "wurble";
