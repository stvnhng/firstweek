// //Story 1
// Create a function that creates car objects which have a make, model year, and color.
//
// Add a function that returns make, model year, and color as one string and use the
// method to tell the user the car's information.
//
// Challenges:
//
// Write a function that creates an object that represents a car with the following
// properties:
// model year
// make
// color
// Add a function to the object that is being returned that concatenates the
// make, year and color.

function createNewCar(newMake, newModel, newYear, newColor) {  // begin createNewPerson
  return {                        // begin object
    make: newMake,
    model: newModel,
    year: newYear,
    color: newColor,
    getData: function() {         // begin function
      return this.make+" "+this.model+" "+this.year+" "+this.color
    }                             // end function
  };                              // end object
}                                 // end createNewPerson

function createNewCar(newMake, newModel, newYear, newColor) {  // begin createNewPerson
  return {                        // begin object
    make: newMake,
    model: newModel,
    year: newYear,
    color: newColor,
    getData: function() {         // begin function
      return this.make+" "+this.model+" "+this.year+" "+this.color
    }                             // end function
  };                              // end object
}                                 // end createNewPerson
undefined

var car = createNewCar('Honda', 'Prelude', '2000', 'Pearl White')
undefined

car
{make: "Honda", model: "Prelude", year: "2000", color: "Pearl White", getData: ƒ}

car.getData()
"Honda Prelude 2000 Pearl White"


// Story 2
// The car can accelerate, brake, and tell you its speed.
//
// Challenges:
//
// Add a speed variable to the closure of the car object. Add the following functions
// to the object:
// getSpeed: returns current speed
// accelerate: increases the speed by 10mph (but does not return anything)
// brake: decreases the speed by 7mph (but does not return anything)

function createNewCar(newMake, newModel, newYear, newColor) {  // begin createNewPerson
  return {                        // begin object
    make: newMake,
    model: newModel,
    year: newYear,
    color: newColor,
    speed: 0,
    getData: function() {         // begin function
      return this.make+" "+this.model+" "+this.year+" "+this.color
    },
    getSpeed: function() {
      return this.speed
    },
    accelerate: function() {
      this.speed = this.speed + 10
      if(this.getSpeed() >= 80) {
        this.speed=85
      }
    },
    brake: function() {
      this.speed = this.speed - 7
      if(this.getSpeed() <= 0) {
        this.speed=0
      }
    }                             // end function
  };                              // end object
}                                 // end createNewCar

var car = createNewCar('Honda', 'Prelude', '2000', 'Pearl White')

// Story 3
// Create a car object and use a while loop to take its speed up to 50mph.
// Then use a while loop to brake down to 0mph.
// Surprise: it doesnt stop at 0mph, fix that.

// Challenges:
// Create a loop that accelerates the car up to 70mph.
// Create a loop that decelerates the car to 0pmh.
// Call break after the car is at 0mph.
// Fix the issue.

var currentSpeed = car.getSpeed()
  while (car.getSpeed() <50) {
    //while current speed is less than 50, speed will continue to accelerate
    car.accelerate()
    //accelerate is function from previous story
    //currentSpeed = car.getSpeed()
    console.log(car.getSpeed())
  }

var currentSpeed = car.getSpeed()
  // if (currentSpeed >= 50) { // Start Slowing down
    while (car.getSpeed() > 0) {
    // add a conditional statement to check the speed is below 7
     car.brake()
     console.log(car.getSpeed());
   }


  //  Story 4
  //  Challenge:
  //  Limit the car's maximum speed to 85mph. Try taking it above 80mph and see what happens.
  //  Hint: What should happen when you call accelerate at 80mph?

  var currentSpeed = car.getSpeed()
    while (car.getSpeed() <85) {
      //while current speed is less than 85, speed will continue to accelerate
      car.accelerate()
      //accelerate is function from previous story
      //currentSpeed = car.getSpeed()
      console.log(car.getSpeed())
    }


  // Story 5 (Extra)
  // Challenge:
  // Sometimes roads are slippery and downhill, and sometimes brakes fail: make the brake change
  // the speed by a random amount with a maximum of minus 1/2 of the current speed.
  // (Hint: Math.random()). How many iterations does it take to stop the car?

  function createNewCar(newMake, newModel, newYear, newColor) {  // begin createNewPerson
        return {                        // begin object
          make: newMake,
          model: newModel,
          year: newYear,
          color: newColor,
          speed: 0,
          getData: function() {         // begin function
            return this.make+" "+this.model+" "+this.year+" "+this.color
          },
          getSpeed: function() {
            return this.speed
          },
          accelerate: function() {
            this.speed = this.speed + 10
            if(this.getSpeed() >= 80) {
              this.speed=85
            }
          },
          brake: function() {
            this.speed = this.speed - Math.round(Math.random()*(this.speed*.5))
          }                             // end function
        }                               // end object
      }                                 // end createNewCar

      var car = createNewCar('Honda', 'Prelude', '2000', 'Pearl White')


      var currentSpeed = car.getSpeed()
        while (car.getSpeed() <85) {
          //while current speed is less than 85, speed will continue to accelerate
          car.accelerate()
          //accelerate is function from previous story
          //currentSpeed = car.getSpeed()
          console.log(car.getSpeed())
        }

      var currentSpeed = car.getSpeed()
        // if (currentSpeed >= 50) { // Start Slowing down
          while (car.getSpeed() > 0) {
          // add a conditional statement to check the speed is below 7
           car.brake()
           console.log(car.getSpeed());
         }

  //     function maxStop(){
  //       return Math.floor(math.random()*Math.floor(85))
  // console.log(maxStop())
  //     }
