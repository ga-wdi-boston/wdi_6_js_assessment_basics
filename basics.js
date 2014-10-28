///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];

for(var i = 0, length = pets.length; i < length; i++){
  // console.log(pets[i]);
  console.log("I have a " + pets[i]);
}

// .5/1 did not include the "I have a "

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };

friend.hairColor = "green";

// 1/1

///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

// var squarePlusOne = function(n){
//   squared = n * n;
//   return squared + 1;
// };

// The way it is declared, square is a global var and we don't want that.
// Also, we don't need to save n*n in a variable, we can just return it.

var squarePlusOne = function(n){
  return (n * n) + 1;
};

// 1/1

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
  var greeting;
  greeting = "Hi, " + name + " here!";

  if (excited){
    return greeting.toUpperCase(); // searched Google for upcase method
  } else {
    return greeting;
  }
}

// 1/1

///// Question 5
// Consider the following code.

var anna = {name: "Anna",
            age: 28,
            luckyNumber: function() {
              return this.age*2;
            }
          }

// What is `anna`? (e.g. method, function, string, etc.)

  // an object

// What are `name`, `age`, and `luckyNumber`?

  // property names

// What does `this` refer to?

  // the anna ojbect

// If you are in console.log and you want to see anna's lucky number, how would you do that?

  anna.luckyNumber();

// If you want to change anna's name to wurble, how would you do that?

  anna.name = "wurble";

  // 1/1

  // 4.5 / 5
