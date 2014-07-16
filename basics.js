///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'snake'];

function printPets(element, array) {
  console.log("I have a " + element);
}

pets.forEach(printPets);

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hair_color: 'blue' };

friend.replace

///// Question 3
// The function below is problematic. Write code that demonstrates the problem,
// then modify the function (preserving its purpose) to remove the problem.

var square_plus_one = function(n){
  var squared = n * n;
  return squared + 1;
};

// In the console, squared is available outside of the function, and remains
// n*n. Eg. square_plus_one(5) sets squared to 25 and can be checked
// outside of the function. **Squared here is being set as a global variable
// as var was not declared. Added var to squared declaration/assignment

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
var greeting = function(greeting, name, mood) {
  mood = mood || bored;
  greeting = greeting || 'Hi';
  name = name || 'nobody';
  if (mood === 'excited') {
    console.log((greeting + ' ' + name + ' here!').toUpperCase);
  }
  else {
    console.log(greeting + ' ' + name + ' here!');
  }
};


///// Question 5
// Write a function called `twice` that accepts both a value and another
// function as arguments, and calls the provided function twice, both times
// with the value as an argument. Below is an example value and function.

var phrase = 'Odelay!';
var shoutIt = function(text){
  console.log(text.toUpperCase());
};

var twice = function(text, function){
  console.log(function(text));

}

//Incomplete, know I want to create a closure expression here!
