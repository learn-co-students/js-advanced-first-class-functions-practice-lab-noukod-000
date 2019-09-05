// Code your solution in this file!
function logDriverNames(drivers){
    drivers.forEach( (driver) => console.log(driver.name) )
}

function logDriversByHometown( drivers, hometown ){
    drivers.filter( function(driver){
        if (driver.hometown === hometown){
            console.log(driver.name);
        }
    } )
}


function driversByRevenue(drivers){
  return  drivers.slice().sort( function(a, b){
        return a.revenue - b.revenue
    } )
}

function driversByName(drivers){
   return drivers.slice().sort( function(a, b){
        a = a.name.toUpperCase();
        b = b.name.toUpperCase();
        if (a < b){
            return -1;}
        if (a > b){
            return 1;}
    });
}

function totalRevenue(drivers){
    return drivers.reduce( function(agg, el){
        return agg + el.revenue;
    }, 0 );
}

function averageRevenue(drivers){
   return totalRevenue(drivers) / drivers.length;
}