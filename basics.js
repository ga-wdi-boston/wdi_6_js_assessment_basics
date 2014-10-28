///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];

for (var i=0, length = pets.length; i < length; i++){  //checked notes for syntax error
  console.log("I have a " + pets[i]);
}

//CORRECT

// pets.map(array, function(item, index) {
//   return console.log("I have a " + );
// });
// ( ^ this was commented-out gobbledigook that I forgot to erase)

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };

friend.hairColor = "green";

//CORRECT

///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

// The code uses a variable "squared", but never defines the variable - so I just added a "var" before it.

var squarePlusOne = function(n){
  var squared = n * n;
  return squared + 1;
};

//CORRECT - note that if the variable is not defined, it is global and thus could be changed outside the function

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
  var greeting = ("Hi, " + name + " here!");
  if (excited === true) {
    return (greeting.toUpperCase());  //looked up "toUpperCase" method on the googles
  } else {
    return greeting;
  }
}


//CORRECT

///// Question 5
// Consider the following code.

var anna = {name: "Anna",
            age: 28,
            luckyNumber: function() {
              return this.age*2;
            }
          }

// What is `anna`? (e.g. method, function, string, etc.)
  // a variable

  // CORRECTish? anna is a variable, but more importantly an object

// What are `name`, `age`, and `luckyNumber`?
  // properties

  // CORRECT

// What does `this` refer to?
  //a property of 'anna'

  // INCORRECT - refers to the current object

// If you are in console.log and you want to see anna's lucky number, how would you do that?
  anna.luckyNumber(anna);

    // CORRECT


// If you want to change anna's name to wurble, how would you do that?
  anna.name = "wurble";

    // CORRECT
