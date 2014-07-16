///// Question 1
// Write a loop that would log each element of the array below to the console,
// prefixed with the text "I have a " (so "I have a cat", "I have a dog", etc.)
function petFinder() {
  var pets = ['cat', 'dog', 'snake'];
  for (var i = 0; i < pets.length; i++){
    console.log('I have a ' + pets[i]);
  }
}

///// Question 2
// Change my friend's hair color to "green", without modifying the line below.

var friend = { name: 'Chris', age: 27, hair_color: 'blue' };
friend.hair_color = 'green';



///// Question 3
// The function below is problematic. Write code that demonstrates the problem,
// then modify the function (preserving its purpose) to remove the problem.

var square_plus_one = function(n){
  if(arguments.length !== 1) {
    throw new Error('wrong number of arguments: ' + arguments.length + ' for 1');
  }
  squared = n * n;
  return squared + 1;
};

'before you could run the function without a value and it would return NaN';
'also there\'s no var in front of the squared variable';


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
function greeting(name, excited){

  excited = excited || false;
  var greet = "Hi, ' + name + ' here!";
  greet = greet.excited || greet;

  return greet;
}

///// Question 5
// Write a function called `twice` that accepts both a value and another
// function as arguments, and calls the provided function twice, both times
// with the value as an argument. Below is an example value and function.
var phrase = 'Odelay!';
var shoutIt = function(text){
  console.log(text.toUpperCase());



function twice (value, otherFunction) {

  };
}
