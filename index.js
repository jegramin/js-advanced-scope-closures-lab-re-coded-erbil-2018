function produceDrivingRange(blockRange){
  return function(trip){
    let me = parseInt(blockRange) - parseInt(trip);
    return `${me} blocks out of range`;
  }
}