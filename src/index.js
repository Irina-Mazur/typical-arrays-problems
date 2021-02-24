
exports.min = function min (array) {
    if (isArrayEmpty(array)) {
      return 0;
    }
        
    return Math.min(...array);  
}

exports.max = function max (array) {
    if (isArrayEmpty(array)) {
        return 0;
    }
        
    return Math.max(...array);
}

exports.avg = function avg (array) {
    if (isArrayEmpty(array)) {
        return 0;
    }
        
    return array.reduce((a, b) => (a + b)) / array.length;
}

const isArrayEmpty = function(array) {
    return !(Array.isArray(array) && array.length);
}
