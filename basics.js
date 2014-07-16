///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'snake'];

pets.forEach(function(pet) {
  console.log("I have a " + pet);
});

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hair_color: 'blue' };

friend.hair_color = 'green';

///// Question 3
// The function below is problematic. Write code that demonstrates the problem,
// then modify the function (preserving its purpose) to remove the problem.

var square_plus_one = function(n){
  squared = n * n;
  return squared + 1;
};

// you declare a variable in the function but do not use var in front of it, so it becomes a global variable- also its longer than it needs to be

var square_plus_one = function(n) {
  return (n * n) + 1;
};


///// Question 4
// Translate the Ruby method defined below into a JavaScript function.

/*
def greet(name, excited = false)
  greeting = "Hi, #{name} here!"
  if excited
    greeting.upcase
  else
    greeting
  end
end
*/

function greet(name, options) {
  var greeting = "Hi, " + name + " here!";
  options = options || {};
  var excited = options.excited || false;
  if (options.excited === true) return greeting.toUpperCase();
  return greeting;
}

///// Question 5
// Write a function called `twice` that accepts both a value and another
// function as arguments, and calls the provided function twice, both times
// with the value as an argument. Below is an example value and function.

var phrase = 'Odelay!';
var shoutIt = function(text){
  console.log(text.toUpperCase());
};

function twice(value, call_function) {
  call_function(value);
  call_function(value);
}
