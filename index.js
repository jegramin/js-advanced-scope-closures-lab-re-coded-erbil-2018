function produceDrivingRange(blockRange){
  return function(trip,two){
    let me = parseInt(trip) + parseInt(blockRange);
    let u = parseInt(two);
    let us = u -me;
     if(me > u){
       return `${us} blocks out of range`;
     }else{
       return `within range by ${us}`;
     }
  }
}