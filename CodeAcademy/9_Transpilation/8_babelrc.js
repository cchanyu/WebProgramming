/*
.babelrc
Now that you’ve downloaded the Babel packages, you need to specify the version of the source JavaScript code.

You can specify the initial JavaScript version inside of a file named .babelrc. In your root directory, you can run touch .babelrc to create this file.

Your project directory contains the following folders and files:

project
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ .babelrc
|_ package.json
Inside .babelrc you need to define the preset for your source JavaScript file. The preset specifies the version of your initial JavaScript file.

Usually, you want to transpile JavaScript code from versions ES6 and later (ES6+) to ES5. From this point on, we will refer to our source code as ES6+, because Ecma introduces new syntax with each new version of JavaScript.

To specify that we are transpiling code from an ES6+ source, we have to add the following JavaScript object into .babelrc:

{
  "presets": ["env"]
}
When you run Babel, it looks in .babelrc to determine the version of the initial JavaScript file. In this case, ["env"] instructs Babel to transpile any code from versions ES6 and later.

Instructions
1.
In the root directory, use touch to create a new .babelrc file.

2.
Open the .babelrc file and add an object that specifies the preset to "env".
Run the code once you’ve added the object.
*/
var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;