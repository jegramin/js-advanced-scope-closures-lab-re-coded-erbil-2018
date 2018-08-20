function produceDrivingRange(blockRange){
  return function(trip){
    let me = blockRange - trip;
    return `${me} blocks out of range`;
  }
}