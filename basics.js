///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];

for(i = 0; i < pets.length; i++){
  console.log("I have a " + pets[i]);
}

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };

friend.hairColor = 'green';


///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

var squarePlusOne = function(n){
  squared = n * n;
  return squared + 1;
};

squared should be declared as a local variable

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


// What are `name`, `age`, and `luckyNumber`?


// What does `this` refer to?


// If you want to return the value of anna's lucky number, how would you do that?


// If you want to change anna's name to "wurble", how would you do that?


///Question 6

// Create a Person constructor that takes a name and age as arguments

var Person = function(name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype = {
  luckyNumber: function(){
    return "The lucky number of " + this.name + " is " + Math.random();
  }
};

//


//initialize two people, david and anna
var david = new Person('David', 31);

var anna = new Person('Anna', 29);

//create a new property luckyNumber that can be called on all Persons

console.log(david.luckyNumber());
