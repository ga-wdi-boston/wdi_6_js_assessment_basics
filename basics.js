///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];

for(i in pets){console.log("I have a " + pets[i] + ","); };

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };

friend.hairColor = 'green';
//console.log(friend.hairColor);

///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

var squarePlusOne = function(n){
  var squared = n * n;
  return squared + 1;
};

console.log(squarePlusOne(5));
//squared declared without a var makes it a global variable.

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

var greet = function(name,excited){
  if(excited) {
    return "Hi, " + name.toUpperCase() + " here!";
  } else {
    return "Hi, " + name + " here!";
  }
}

console.log(greet("Jenny",true));
console.log(greet("Marcy",false));

///// Question 5
// Consider the following code.

var anna = {name: "Anna",
            age: 28,
            luckyNumber: function() {
              return this.age*2;
            }
          }

// What is `anna`? (e.g. method, function, string, etc.)
//an object literal

// What are `name`, `age`, and `luckyNumber`?
// attributes

// What does `this` refer to?
//It's a pointer and points to the object for which the method is called.

// If you want to return the value of anna's lucky number, how would you do that?
console.log(anna.luckyNumber());

// If you want to change anna's name to "wurble", how would you do that?
anna.name = "Wurble";
console.log(anna.name);
