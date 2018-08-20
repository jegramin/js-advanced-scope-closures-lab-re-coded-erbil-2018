function produceDrivingRange(blockRange){
  return function(trip,two){
    let me = (parseInt(trip) + parseInt(blockRange)) - parseInt(two);
     if(me - 0){
       return `${me} blocks out of range`;
     }else{
       
     }
  }
}