/*
CONDITIONAL STATEMENTS
If Statement
We often perform a task based on a condition. For example, if the weather is nice today, then we will go outside. If the alarm clock rings, then we’ll shut it off. If we’re tired, then we’ll go to sleep.

In programming, we can also perform a task based on a condition using an if statement:

if (true) {
  console.log('This message will print!'); 
}
// Prints: This message will print!
Notice in the example above, we have an if statement. The if statement is composed of:

The if keyword followed by a set of parentheses () which is followed by a code block, or block statement, indicated by a set of curly braces {}.
Inside the parentheses (), a condition is provided that evaluates to true or false.
If the condition evaluates to true, the code inside the curly braces {} runs, or executes.
If the condition evaluates to false, the block won’t execute.
Let’s make an if statement.

Instructions
1.
Using the let keyword, declare a variable named sale. Assign the value true to it.

2.
Now create an if statement. Provide the if statement a condition of sale.
Inside the code block of the if statement, console.log() the string 'Time to buy!'.

3.
Notice that the code inside the if statement ran, since 'Time to buy!' was logged to the console.
Below the sale variable declaration, but before the if statement, reassign sale to false. Run your code and observe what happens, we’ll be changing this behavior in the next exercise.
*/
let sale = true
sale = false

if (sale == true) {
  console.log('Time to buy!')
}