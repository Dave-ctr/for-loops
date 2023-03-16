const cars = [
  { make: 'Nissan', model: 'Skyline R32', year: 1992 },
  { make: 'Nissan', model: 'Laurel', year: 1988},
  { make: 'Nissan', model: 'Fairlady 300zx', year: 1989}
  ]

function loopCars() {
  for (let i = 0; i < cars.length; i++) {
    console.log(cars[i].make + ' ' + cars[i].model + ' ' + cars[i].year);
  }
}

loopCars()