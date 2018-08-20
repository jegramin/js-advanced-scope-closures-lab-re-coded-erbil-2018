function produceDrivingRange(blockRange){
  return function(trip){
    let me = parseInt(trip) % parseInt(blockRange);
    return `${me} blocks out of range`;
  }
}