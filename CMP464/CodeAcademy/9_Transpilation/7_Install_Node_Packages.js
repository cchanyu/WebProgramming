/*
Install Node Packages
We use the npm install command to install new Node packages locally. The install command creates a folder called node_modules and copies the package files to it. The install command also installs all of the dependencies for the given package.

To install Babel, we need to npm install two packages, babel-cli and babel-preset-env. However, npm installs over one hundred other packages that are dependencies for Babel to run properly.

We install Babel with the following two commands:

$ npm install babel-cli -D
$ npm install babel-preset-env -D
The babel-cli package includes command line Babel tools, and the babel-preset-env package has the code that maps any JavaScript feature, ES6 and above (ES6+), to ES5.

The -D flag instructs npm to add each package to a property called devDependencies in package.json. Once the project’s dependencies are listed in devDependencies, other developers can run your project without installing each package separately. Instead, they can simply run npm install — it instructs npm to look inside package.json and download all of the packages listed in devDependencies.

Once you npm install packages, you can find the Babel packages and all their dependencies in the node_modules folder. The new directory structure contains the following:

project
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ package.json
The ... in the file structure above is a placeholder for 100+ packages that npm installed.

Instructions
1.
Enter ls into the terminal to view the current directory’s file structure.

2.
Use npm with the -D flag to install the Babel command line package and add it to the devDependencies property in package.json.

3.
Use npm with the -D flag to install the Babel preset environment package and add it to the devDependencies property in package.json.
Enter ls into the terminal to see the file structure of your current directory. Notice the addition of node_modules.
You can also see the new folder by clicking on the file navigation button above the text editor.
*/
var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;