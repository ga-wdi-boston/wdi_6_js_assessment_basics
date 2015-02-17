///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

var pets = ['cat', 'dog', 'wombat'];
for (var i = 0; i < pets.length; i += 1 ) {
  console.log(pets[i]);
};


///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hairColor: 'blue' };
friend.hairColor = 'green';

///// Question 3
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

var squarePlusOne = function(n){
  squared = n * n;
  return squared + 1;
};
// this code seems to work so I'm guessing it is written poorly but I don't actually know why. Welp.

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

var greet = function(name, excited) {
  greeting = "Hi, " + name + " here!";
  if (excited === "yes") {
    return greeting.toUppercase();
  }
  else{
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
// object

// What are `name`, `age`, and `luckyNumber`?
// properties of the object anna

// What does `this` refer to?
// this acts like self in ruby - in this case refers to anna's age which is 28

// If you want to return the value of anna's lucky number, how would you do that?
// luckyNumber() in the console or return luckyNumber()

// If you want to change anna's name to "wurble", how would you do that?
// anna.name = "wurble"
