///// Question 1  ---  HALF CORRECT?
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)

    var pets = ['cat', 'dog', 'wombat'];

    var iHave = function(element) {
      console.log('I have a ' + element + '.');  // only need a return here with .map
    }                                            // would use console.log if used .forEach.

    console.log(pets.map(iHave));

    // alternative - loop with index.

    var pets = ['cat', 'dog', 'wombat'];

    for (var i=0, length = pets.length; i < length; i++) {
      console.log('I have a ' + pets[i] + '.');
    }

    // forEach, in-line
    pets.forEach(function(element) {
      console.log('I have a ' + element + '.');
    })

///// Question 2  ---  CORRECT
// Change my friend's hair color to "green", without modifying the line below.

    var friend = { name: 'Chris', age: 27, hairColor: 'blue' };

    friend.hairColor = 'green';


///// Question 3  ---  CORRECT
// The function below is problematic. In 1-2 sentences explain why, and then fix the code.

var squarePlusOne = function(n){
  squared = n * n;
  return squared + 1;
};

    // In the above, 'squared' is a global variable. Can cause problems.

    var squarePlusOneNew = function(n){
      var squaredNew = n * n;
      return squared + 1;
    };

    // Problem is that with global variables, anyone or any other function can alter its value.

///// Question 4  ---  NOT TOTALLY RIGHT
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
      var greeting = "Hi, " + name + " here!";
      if (excited === true) {
        greeting.toUpperCase();             // need a manual return here
      } else {
        greeting                           // need a manual return here, and missing a semicolon
      }
    }

    // corrected:


    var greet = function(name, excited) {
      var greeting = "Hi, " + name + " here!";
      if (excited === true) {             // can also just do `if (excited)` because excited on
                                          // its own exists and will evaluate to true
        return greeting.toUpperCase();    // is a string method. does not take an argument
      } else {
        return greeting;
      }
    }


///// Question 5  ---  CORRECT
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
    // properties

// What does `this` refer to?
    // the entire object 'anna'

// If you are in console.log and you want to see anna's lucky number, how would you do that?
    // anna.luckyNumber();

// If you want to change anna's name to wurble, how would you do that?
    // anna.name = 'wurble';
