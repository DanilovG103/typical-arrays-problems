
exports.min = function min (array) {
  if (array) {
    return (array.length !== 0) ? Math.min(...array) : 0;
  }
  return 0
}

exports.max = function max (array) {
  if (array) {
    return (array.length !== 0) ? Math.max(...array) : 0;
  }
  return 0
}

exports.avg = function avg (array) {
  if (array) {
    return (array.length !== 0 ) ? array.reduce((a,b) => a + b) / array.length : 0
  }
  return 0
}
