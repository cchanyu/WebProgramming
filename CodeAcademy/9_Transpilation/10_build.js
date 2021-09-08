/*
Build
We’re ready to transpile our code! In the last exercise, we wrote the following script in package.json:

"build": "babel src -d lib"
Now, we need to call "build" from the command line to transpile and write ES5 code to a directory called lib.

From the command line, we type:

npm run build
The command above runs the build script in package.json.

Babel writes the ES5 code to a file named main.js (it’s always the same name as the original file), inside of a folder called lib. The resulting directory structure is:

project
|_ lib
|___ main.js
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ .babelrc
|_ package.json
Notice, the directory contains a new folder named lib, with one file, called main.js.

The npm run build command will transpile all JavaScript files inside of the src folder. This is helpful as you build larger JavaScript projects — regardless of the number of JavaScript files, you only need to run one command (npm run build) to transpile all of your code.

Instructions
1.
Transpile the ES6+ code to lib using the build command.
Once you’ve done this, navigate to the new lib folder and open main.js.
*/
var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;