const returnFirstTwoDrivers = driverArray => driverArray.slice(0,2);

const returnLastTwoDrivers = driverArray => driverArray.slice(driverArray.length - 2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = int => (fare => fare * int);

const fareDoubler = fare => createFareMultiplier(2)(fare);

const fareTripler = fare => createFareMultiplier(3)(fare);

const selectDifferentDrivers = (driverArray, driverFunction) => driverFunction(driverArray);