function produceDrivingRange(blockRange){
  return function(trip){
    return blockRange>trip;
  }
}