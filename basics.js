///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];
for (var prop in pets){
  console.log(" I have a " + pets[prop]);
}
///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };
friend.hairColor = 'pink';
///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

var squarePlusOne = function(n){
  var squared = n * n; // squared was not define by var
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
  var greeting = " Hi! " + name + " here! ";
  if (excited === true){
    return greeting(str.toUpperCase()); // not sure about this syntax. :(
  }else{
    return greeting;
  }
};
console.log(greet('Gina', 'excited'));
///// Question 5
// Consider the following code.

var anna = {name: "Anna",
            age: 28,
            luckyNumber: function() {
              return this.age*2;
            }
          }

// What is `anna`? (e.g. method, function, string, etc.)
  //anna is a variable

// What are `name`, `age`, and `luckyNumber`?
  // they are properties

// What does `this` refer to?
  // similar to self. It refers to whats going on inside of the fuction.

// If you want to return the value of anna's lucky number, how would you do that?
  console.log(anna.luckyNumber());

// If you want to change anna's name to "wurble", how would you do that?

