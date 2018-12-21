function IndexInsertionSorter () {
  this.sortedArray = [];

  this.sort = function(array, sortedArray) {
    array.forEach(function(element) {
      sortedArray[element - 1] = element;
    });

    this.sortedArray = sortedArray.filter(function (el) {
      return el != "";
    });
    return this.sortedArray;
  };
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = IndexInsertionSorter;
}
