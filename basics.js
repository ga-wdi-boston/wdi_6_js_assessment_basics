///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'snake'];

pets.forEach(function(animal){
  console.log("I have a " + animal);
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

squared needs to be declared with var in front of it

function square_plus_one(n){
  var sqaured = n * n ;
  return squared + 1;
}

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

function greet(name, excited){
  var greeting = 'Hi ' + name + ' here!';
  excited = excited || false;
  if (excited === true) {
    return greeting.toUpperCase();
  }
  else {
    return greeting;
  }
}

///// Question 5
// Write a function called `twice` that accepts both a value and another
// function as arguments, and calls the provided function twice, both times
// with the value as an argument. Below is an example value and function.

var phrase = 'Odelay!';
var shoutIt = function(text){
  console.log(text.toUpperCase());
};

var twice = function(val, funk){
  return funk(funk(val));
};
