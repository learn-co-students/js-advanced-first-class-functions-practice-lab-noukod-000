// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(el){
    console.log(el.name);
  })
}

function logDriversByHometown(drivers,city){
  drivers.forEach(function(el){
    if(el.hometown === city){console.log(el.name);}
  })
}

function driversByRevenue(drivers){
  const newArray = [];
  return drivers.slice().sort( function(a, b){
    return  a.revenue - b.revenue
  } );
  return newArray.push(drivers);
}

function driversByName(drivers){
  const newArray = [];
  return drivers.slice().sort( function(a, b){
    return  a.name.localeCompare(b.name);
  } );
  return newArray.push(drivers);
}
