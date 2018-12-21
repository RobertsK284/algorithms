function SelectSorter() {
  this.sortedArray = [];

  this.sort = function(array, sortedArray) {
    var tempArray = Object.assign([], array);

    while(tempArray.length > 0) {
      var minimum = Math.min(...tempArray);

      sortedArray.push(minimum);

      var indexOfMin = tempArray.indexOf(minimum);
      
      tempArray.splice(indexOfMin, 1);
    }

    return this.sortedArray;
  };
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = SelectSorter;
}
