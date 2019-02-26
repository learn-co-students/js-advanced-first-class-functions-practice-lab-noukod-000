// Code your solution in this file!

// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers,hometown){
 const byHomeTown=drivers.filter(function(driver){
    return driver.hometown===hometown
  })

  logDriverNames(byHomeTown)
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(a,b){
    return a.revenue - b.revenue
  })
}

function driversByName(drivers){
  return drivers.slice().sort(function(a,b){
    return a.name.localeCompare(b.name);
  })
}

const drivers = [
    { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
    { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
    { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
    { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
    { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
  ];

const totalRevenue = function(drivers){
  let totalPrice = 0;

  drivers.forEach(function(driver){
    totalPrice += driver.revenue;
  })
    return totalPrice
}




const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};

  averageRevenue(drivers)
