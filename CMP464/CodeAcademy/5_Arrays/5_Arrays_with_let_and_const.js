/*
Arrays with let and const
You may recall that you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.

Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.

The instructions below will illustrate this concept more clearly. Pay close attention to the similarities and differences between the condiments array and the utensils array as you complete the steps.

Instructions
1.
Below the two existing arrays, re-assign the element in index 0 of condiments to 'Mayo'.
Log the updated array, condiments, to the console.

2.
Below your code from Step 1, reassign condiments to be a new array that contains a single string ['Mayo']
Log the result to the console.
Notice that you can re-assign elements in an array and re-assign an entire new array to a variable declared using the let keyword.

3.
Below your code from Step 2, re-assign the last item from the utensils array to 'Spoon'.
Log the updated array to the console.
*/
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo'
console.log(condiments)
condiments = ['Mayo']
console.log(condiments)

utensils[3] = 'Spoon'
console.log(utensils)