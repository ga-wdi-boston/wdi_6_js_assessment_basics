///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];

for(var i = 0, length = pets.length; i < length; i++) {
  console.log("I have a " + pets[i]);
}

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };

friend.hairColor = "green";

///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

var squarePlusOne = function(n){
  var squared;
  squared = n * n;
  return squared + 1;
};
//the problem I see below is that squared is a global variable at because there isn't anything declaring it.

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
  greeting = "Hi, " + name + " here!";
  if (excited === true)
    return greeting.toUpperCase();
  else {
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

//'anna' is an object.

// What are `name`, `age`, and `luckyNumber`? 

//they are properties of the object 'anna'.

// What does `this` refer to? 

// 'this' refers to the object 'anna' as a whole.


// If you are in console.log and you want to see anna's lucky number, how would you do that? 
console.log(anna.luckyNumber());
// or if you mean inside the browser
anna.luckyNumber();

// If you want to change anna's name to wurble, how would you do that? 
anna.name = "wurble";