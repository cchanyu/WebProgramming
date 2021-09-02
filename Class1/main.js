// comment
/* comment */
console.log("Hello VScode")

// Data types:
// 1. Strings: text or characters we would read

let firstName = "Chanyu"
var lastName = "Choung"
const middleName = "Lee"

// let = people use this in ES6
// const = can't change

console.log(firstName)
firstName = "Chan yu"
console.log(firstName)

// 2. Numbers: integers or floating point

let age = 28
console.log(age)

let y = 6
let z = 6 - 5

// 3. Boolean: true or false

let inClass = true
let time = 923

if(inClass == true && time < 930){
    console.log("we're in class!")
} else {
    console.log("aw man class is over!")
    inClass = true
}
