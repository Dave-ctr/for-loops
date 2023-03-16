const cars = [
  { make: 'Nissan', model: 'Skyline R32', year: 1992 },
  { make: 'Nissan', model: 'Laurel', year: 1988},
  { make: 'Nissan', model: 'Fairlady 300zx', year: 1989}
  ]

  // students have to write this:
function loopCars() {
  // the building blocks of a for loop (starting point, ending point, increment)
  // little man i
  for (let i = 0; i < cars.length; i++) {
    // the body of the loop (what happens each time) is that the make, model and year are logged to the console
    console.log(cars[i].make + ' ' + cars[i].model + ' ' + cars[i].year);
  }
}

// call the function:
loopCars()

// copy the above function but for a cooking recipe
