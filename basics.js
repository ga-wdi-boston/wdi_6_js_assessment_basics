///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];

for (var i = 0; i < pets.length; i++){
  console.log('I have a ' + pets[i]);
};

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };

friend.hairColor = 'green';


///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

//squared is not declared as a variable and thus can be changed later on.

var squarePlusOne = function(n){
  var squared = n * n;
  return squared + 1;
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

var greet = function(name, excited){
  var greeting = "Hi, " + name + " here!";
  if (excited === true) {
    return greeting.toUpperCase();
  }else{
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
  //An object

// What are `name`, `age`, and `luckyNumber`?
  // Properties

// What does `this` refer to?
  // the current object being operated on.

// If you want to return the value of anna's lucky number, how would you do that?
  // anna.luckyNumber();

// If you want to change anna's name to "wurble", how would you do that?
  // anna.name = 'wurble';
