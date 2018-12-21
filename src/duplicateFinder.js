function DuplicateFinder() {
  var sortedArray = [];

  this.findCopies = function(array) {
    var noDuplicatesFound;
    array.sort();

    noDuplicatesFound = array.every(function(value, index, array) {
      return array[index] != array[index + 1];
    });
    return noDuplicatesFound;
  };
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = DuplicateFinder;
}
