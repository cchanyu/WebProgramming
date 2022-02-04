/*
Block Scope
The next context we’ll cover is block scope. When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. We say that variable has block scope because it is only accessible to the lines of code within that block.

Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.

Block scope works like this:

const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};
 
logSkyColor(); // blue 
console.log(color); // ReferenceError
You’ll notice:

We define a function logSkyColor().
Within the function, the color variable is only available within the curly braces of the function.
If we try to log the same variable outside the function, it throws a ReferenceError.

Instructions
1.
In main.js, define a function logVisibleLightWaves().

2.
Within the logVisibleLightWaves() function, using const, create a variable lightWaves and set it equal to 'Moonlight'.

3.
Within the logVisibleLightWaves() function, beneath the lightWaves variable, add a console.log() statement that will log the value of the lightWaves variable when the function runs.

4.
Call the logVisibleLightWaves() function from outside the function.

5.
Beneath the function call, log the value of lightWaves to the console from outside the function.
You’ll notice that it logs a ReferenceError since the variable is tied to the block scope of the function!
*/
function logVisibleLightWaves(){
    const lightWaves = 'Moonlight'
    console.log(lightWaves)
  }
  
  console.log(logVisibleLightWaves())
  console.log(lightWaves)