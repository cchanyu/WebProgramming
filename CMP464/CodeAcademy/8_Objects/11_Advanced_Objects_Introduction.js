/*
Advanced Objects Introduction
Remember, objects in JavaScript are containers that store data and functionality. In this lesson, we will build upon the fundamentals of creating objects and explore some advanced concepts.

So if there are no objections, let’s learn more about objects!

In this lesson we will cover these topics:

how to use the this keyword.
conveying privacy in JavaScript methods.
defining getters and setters in objects.
creating factory functions.
using destructuring techniques.

Instructions
Look over the code in main.js to see examples of the object related concept covered in the lesson. Then click next to get started on learning these concepts!
*/
const robot = {
    model: 'B-4MI',
    mobile: true,
    greeting() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  }
  
  const massProdRobot = (model, mobile) => {
    return {
      model,
      mobile,
      greeting() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
      }
    }
  }
  
  const shinyNewRobot = massProdRobot('TrayHax', true)
  
  const chargingStation = {
    _name: 'Electrons-R-Us',
    _robotCapacity: 120,
    _active: true,
    _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],
  
    set robotCapacity(newCapacity) {
      if (typeof newCapacity === 'number') {
        this._robotCapacity = newCapacity;
      } else {
        console.log(`Change ${newCapacity} to a number.`)
      }
    },
    get robotCapacity() {
      return this._robotCapacity;
    }
  }
  