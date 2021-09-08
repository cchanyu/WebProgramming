/*
Global Scope
Scope is the context in which our variables are declared. We think about scope in relation to blocks because variables can exist either outside of or within these blocks.

In global scope, variables are declared outside of blocks. These variables are called global variables. Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.

Let’s take a look at an example of global scope:

const color = 'blue';
 
const returnSkyColor = () => {
  return color; // blue 
};
 
console.log(returnSkyColor()); // blue
Even though the color variable is defined outside of the block, it can be accessed in the function block, giving it global scope.
In turn, color can be accessed within the returnSkyColor function block.
Let’s work with global variables to see how data can be accessible from any place within a program.

Instructions
1.
At the top of main.js, write three global variables:
Name the first variable satellite and set it equal to 'The Moon'.
Name the second variable galaxy and set it equal to 'The Milky Way'.
Name the third variable stars and set it equal to 'North Star'.

2.
Below the variables created in the previous step, write a function named callMyNightSky. Inside the function, include a return statement like this:
return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;

3.
Beneath the callMyNightSky() function, use console.log() to log the value of callMyNightSky() to the console.
You’ll notice that the function block for callMyNightSky() is able to access the global variables freely since the variables are available to all lines of code in the file.
*/
var satellite = 'The Moon'
var galaxy = 'The Milky Way'
var stars = 'North Star'

function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky())