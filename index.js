function produceDrivingRange(blockRange){
  return function(trip,two){
    let me = parseInt(trip) % parseInt(blockRange);
    return `${me} blocks out of range`;
  }
}