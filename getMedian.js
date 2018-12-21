function getMedian(array) {
  array.sort(function(a, b){return a - b;});
  var indexOfMedian = Math.ceil(array.length/2) - 1;
  if (array.length % 2 == 0) {
    return (array[indexOfMedian] + array[indexOfMedian + 1])/2;
  } else {
    return array[indexOfMedian];
  }
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = getMedian;
}
