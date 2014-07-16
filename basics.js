///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'snake'];

pets.forEach(function(pet){
  console.log('I have a ' + pet);
});

// Score 1 of 1.


///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hair_color: 'blue' };

friend.hair_color = 'green';

// Score 2 of 2.


///// Question 3
// The function below is problematic. Write code that demonstrates the problem,
// then modify the function (preserving its purpose) to remove the problem.

var square_plus_one = function(n){
  squared = n * n;
  return squared + 1;
};

// Score 3 of 3.


// 'squared' is declared as a global variable and can be accessed and
// manipulated outside the function scope.
squared = 25;
square_plus_one = function(n){
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

var greet = function(name, excited){
  excited = excited || false;
  var greeting = 'Hi, ' + name + ' here!';
  return excited ? greeting.toUpperCase() : greeting;
};

// Score 4 of 4.


///// Question 5
// Write a function called `twice` that accepts both a value and another
// function as arguments, and calls the provided function twice, both times
// with the value as an argument. Below is an example value and function.

var phrase = 'Odelay!';
var shoutIt = function(text){
  console.log(text.toUpperCase());
};

var twice = function(value, passedfunction){
  passedfunction(value);
  passedfunction(value);
};

// Score 5 of 5.
