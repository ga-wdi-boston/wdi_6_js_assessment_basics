///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];

for (var i = 0; i < pets.length; i++){
  console.log("I have a " + pets[i]);
};



///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };
friend.hairColor = 'green';

///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

//the code as originally written modifies a global varibable named squared.

var squarePlusOne = function(n){
  return n * n + 1;
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

var greet = function(name, excited) {
  var greeting = "Hi, " + name + " here!"
  if (excited) {
    return greeting.toUpperCase();
  } else {
    return greeting;
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
//Object


// What are `name`, `age`, and `luckyNumber`?
//properties of the anna object

// What does `this` refer to?
//the age of the specific object the function is meaning called from.

// If you want to return the value of anna's lucky number, how would you do that?
// anna.luckyNumber();

// If you want to change anna's name to "wurble", how would you do that?
// anna.name = "wurble";

//Question 6
//create a person constructor with name and age
//init two people, dava and anna
//create a property luckyNumber that can be called on all persons.

var Person = function(name, age){
  this.name = name;
  this.age = age;
};
Person.prototype = {
  luckyNumber: function(){
    return Math.floor(Math.random()*9+1);
  }
};
var dave = new Person('Dave', 4);
var anna = new Person('Anna', 5);
console.log(anna.luckyNumber());
