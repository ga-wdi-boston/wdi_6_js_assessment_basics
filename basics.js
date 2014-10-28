///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];

for (var i = 0, tot=pets.length; i < tot; i++) {
  console.log("I have a " + pets[i]);
}

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };

friend.hairColor = 'green';
///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

var squarePlusOne = function(n){
  var squared = n * n;
  return squared + 1;
};

This function is problematic becasuse the variable squared is not defined with a var in front of it, or
at the beginning of the function/above the function.

the problem is that squared is a global variable! and so can be changed outside of the function.
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

var greet, greeting;

greet = function(name, excited) {
  greeting = "hi, " + name + " here!";
  if (excited === true) {     // can change to => if (excited) { and it will already evaluate for booleans
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
anna is an object

// What are `name`, `age`, and `luckyNumber`?
they are properties

// What does `this` refer to?
this is a pointer and refers to the property age in the object anna, points to the whole anna object

// If you are in console.log and you want to see anna's lucky number, how would you do that?
anna.luckyNumber();

// If you want to change anna's name to wurble, how would you do that?
anna.name = "wurble";



