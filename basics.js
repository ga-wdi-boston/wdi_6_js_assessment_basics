

///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];

for (var item in pets) {  //looked up syntaxis
  console.log(item);
}
///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };

friend.hairColor = 'green';
console.log(friend);

///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

var squarePlusOne = function(n){
  var squared = n * n; // squared is being used as a global cariable, this may not be desirable
  return squared + 1;  // adding var will assure squared is a local variable to function squarePlusOne
};

console.log(squarePlusOne(2));

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
  var str = "Hi, " + name + " here!";
  if (excited === true) {
    str1 = str.toUpperCase(); //looked up toUpperCase
  } else {
    str1 = str;
  }
  return str1;
};
console.log(greet("Ilja", true));
console.log(greet("Ilja", false));

///// Question 5
// Consider the following code.

var anna = {name: "Anna",
            age: 28,
            luckyNumber: function() {
              return this.age*2;
            }
          }

// What is `anna`? (e.g. method, function, string, etc.)
// anna is an object

// What are `name`, `age`, and `luckyNumber`?
// parameters

// What does `this` refer to?
// this refers to object anna

// If you are in console.log and you want to see anna's lucky number, how would you do that?
// anna.luckyNumber;
console.log(anna.luckyNumber());
// If you want to change anna's name to wurble, how would you do that?
anna.name = "wurble";
console.log(anna);
