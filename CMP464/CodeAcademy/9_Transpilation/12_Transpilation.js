/*
Transpilation
At this point, you are familiar with ES6+ browser compatibility issues and how to address them with transpilation.

In this project, you will practice configuring Babel to transpile ES6+ code to ES5.

Before you begin, take note of the modern JavaScript syntax on the right, we will be transpiling this into older syntax.The provided code fetches user data from a REST API.

We recommend you complete this project a couple of times to become familiar with setting up Babel.

If you’re stuck and think you may have typed the wrong command select the reset project button and start from the beginning.

Tasks
6/6 Complete
Mark the tasks as complete by checking them off
Transpilation with Babel
1.
Let’s get started! Use npm to create a package.json file in the root directory. The -y option will allow you to skip the prompts.

2.
Next, we are going to configure Babel. Add a .babelrc file to the project folder.

3.
Time to put in some configuration. In .babelrc, preset your local project’s config to "@babel/preset-env".
Don’t forget to put the configuration value inside an array!

4.
Let’s get ready to build!
In package.json, add a script called "build".
When run, the "build" script should use Babel to transpile JavaScript code inside of the src folder and write it to a folder called lib.
Don’t forget to add a comma after the "test" script.

5.
We are ready to go!
Run the build command to transpile the code!

6.
We did it!
View the transpiled code in the lib output directory! This code is now compatible across many more browsers!
*/