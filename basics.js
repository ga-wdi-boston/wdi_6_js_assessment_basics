// SCORE: 4/5
// I looked at my notes from yesterday's lecture and also google searches

///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];

for(pets i=0; length = pets.length; i < length; i++) {
  console.log("I have a " + pets[i]);
}

//1
// Can also do this with a for/each method:
var iHaveA = function(element) {
  return "I have a " + element;
}
console.log(pets.map(iHaveA));




///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };

friend.hairColor = 'green';
//1


///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

var squarePlusOne = function(n){
  var squared;
  squared = n * n;
  return squared + 1;
};

//It's problematic because we have a new variable 'squared' but we never declared it as a new variable by assigning 'var ___'
// 0.5

// CORRECT ANSWER:
// Problem is that sqaured doesn't have a var in front of it so it's a global variable
// which is bad because it's possible to change the value of 'sqared' even outside of the function.



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
  var greeting;
  greeting = prompt("Hi, " + name + " here!");
  if(exited === true){
    alert(greeting.toUpperCase());
  } else {
    alert(greeting);
  }
}

// 0.5

// CORRECT ANSWER
var greet = function(name, excited) {
  var greeting;
  greeting = "Hi, " + name + " here!";
  if(exited === true){  /// could even just have if (excited) without === true
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

// What is `anna`? (e.g. method, function, string, etc.)
'anna' is an object

// What are `name`, `age`, and `luckyNumber`?
they are properties

// What does `this` refer to?
'this' refers to the global object 'anna'

// If you are in console.log and you want to see anna's lucky number, how would you do that?
console.log(anna.luckyNumber());

// If you want to change anna's name to wurble, how would you do that?
anna.name = "wurble";

// 1
