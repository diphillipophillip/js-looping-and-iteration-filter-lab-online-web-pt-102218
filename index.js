// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function(driverName){
    return driverName.slice(0, name.length) === name;
  })
}

function matchName(drivers, name) {
 
}