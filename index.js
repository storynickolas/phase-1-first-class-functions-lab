// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

function createFareMultiplier(num1) {
  return function(num2) { return num1 * num2}
}


const fareDoubler = (num3) => {
  const double = createFareMultiplier(2)
  return double(num3)
}

const fareTripler = (num4) => {
  const Triple = createFareMultiplier(3)
  return Triple(num4)
}

const selectDifferentDrivers = (driversArray, driverFunction) => driverFunction(driversArray)