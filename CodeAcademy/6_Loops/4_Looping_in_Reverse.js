/*
Looping in Reverse
What if we want the for loop to log 3, 2, 1, and then 0? With simple modifications to the expressions, we can make our loop run backward!

To run a backward for loop, we must:

Set the iterator variable to the highest desired value in the initialization expression.
Set the stopping condition for when the iterator variable is less than the desired amount.
The iterator should decrease in intervals after each iteration.
We’ll practice by changing the for we wrote previously to now go in reverse. When writing/changing loops, there is a chance that our stopping condition isn’t met and we get a dreaded infinite loop which essentially stops our programming from running anything else! To exit out of an infinite loop in an exercise, refresh the page - then fix the code for your loop.

Instructions
1.
Make a for loop that loops backwards printing 3 to 0 to the console. Use the >= comparison operator in your stopping condition and the -- operator in your iteration statement.
*/

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; 0 <= counter; counter--){
    console.log(counter);
  }