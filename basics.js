///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'snake'];
function allPets(pets) {
  pets.forEach(function(pet) {
    pets = pets.split(pet).join('');
  });
   console.log("I have a " + pets);
}
// .5

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hair_color: 'blue' };

friend.hair_color = 'green';
// 1

///// Question 3
// The function below is problematic. Write code that demonstrates the problem,
// then modify the function (preserving its purpose) to remove the problem.

var square_plus_one = function(n){
  var squared = n * n;
  return squared + 1;
};
// 1

// Nick's comment: otherwise, without labeling squared as VAR, you have squared as a global variable

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

var greet = function(name, excited) {
  excited = excited || false;
  name = name || " ";
  var greeting = "Hi," + name + " here!";

   if(excited !== false) {
    greeting.toUpperCase();
  }
  return greeting;
};


// .5

///// Question 5
// Write a function called `twice` that accepts both a value and another
// function as arguments, and calls the provided function twice, both times
// with the value as an argument. Below is an example value and function.

var phrase = 'Odelay!';
var shoutIt = function(text){
  console.log(text.toUpperCase());
};



var twice = function(phrase, shoutIt) {
   twice.forEach(phrase, function(shoutIt) {

  });
   console.log((phrase)*2);

};










