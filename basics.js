///// Question 1
// ——————————————————————————————————————————
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];

// Yo, forEach loops over every item in an array, but always returns undefined. 
pets.forEach(logPets);
function logPets(element,index,array){
  console.log("I have a " + element);
}


///// Question 2
// ——————————————————————————————————————————
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };

friend.hairColor = "green";

// just making sure:
// console.log(friend.hairColor);


///// Question 3
// ——————————————————————————————————————————
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

/*
//original function
var squarePlusOne = function(n){
  squared = n * n;
  return squared + 1;
};
*/

/*
Even though the function gives the expected result, it's probably a little verbose. Also, the "squared" variable is a global variable.
*/

var squarePlusOne = function(n){
  return (n * n) + 1;
}
// console.log(squarePlusOne(3)); => 10

///// Question 4
// Translate the Ruby method defined below into a JavaScript function.

var greet = function(name,excited){
  var greeting = "Hi, " + name + " here!";
  if(excited === true){
    return greeting.toUpperCase();
  }else{
    return greeting;
  }
}

// just making sure
// console.log(greet("jason", true));

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
// 'anna' is an object

// What are `name`, `age`, and `luckyNumber`? 
// properties

// What does `this` refer to? 
// the constructor
// boooo, `this` refers to the 'anna' object

// If you are in console.log and you want to see anna's lucky number, how would you do that? 
// console.log(anna.luckyNumber());

// If you want to change anna's name to wurble, how would you do that? 
// anna.name = "wurble";









