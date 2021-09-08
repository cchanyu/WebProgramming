/*
Truthy and Falsy Assignment
Truthy and falsy evaluations open a world of short-hand possibilities!

Say you have a website and want to take a user’s username to make a personalized greeting. Sometimes, the user does not have an account, making the username variable falsy. The code below checks if username is defined and assigns a default string if it is not:

let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
If you combine your knowledge of logical operators you can use a short-hand for the code above. In a boolean condition, JavaScript assigns the truthy value to a variable if you use the || operator in your assignment:

let defaultName = username || 'Stranger';
Because || or statements check the left-hand condition first, the variable defaultName will be assigned the actual value of username if it is truthy, and it will be assigned the value of 'Stranger' if username is falsy. This concept is also referred to as short-circuit evaluation.

Instructions
1.
Let’s use short-circuit evaluation to assign a value to writingUtensil. Do not edit tool yet, we’ll return to tool in the next step.
Assign to writingUtensil the value of tool and if tool is falsy, assign a default value of 'pen'.

2.
Notice that text 'The pen is mightier than the sword' logged to the console. Which means the value of writingUtensil is 'pen'.
What if we reassign the value of tool to 'marker'. Let’s see what happens to the value of writingUtensil.
*/
let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
tool = 'marker'
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);