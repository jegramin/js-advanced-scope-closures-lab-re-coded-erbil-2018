function produceDrivingRange(blockRange){
  return function(trip){
    let me = trip - blockRange;
    return `${me} blocks out of range`;
  }
}