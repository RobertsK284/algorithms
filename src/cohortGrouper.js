function CohortGrouper() {
  this.groupList = [];

  this.divide = function(array, numberOfGroups, groupList) {
    var i = 0;
    while (i < numberOfGroups) {
      groupList.push([]);
      i++;
    }
    var glIndex = 0;
    array.forEach(function(element) {
      if (glIndex == numberOfGroups) {
        glIndex = 0;
      }
      groupList[glIndex].push(element);
      glIndex++;
    });
  };
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = CohortGrouper;
}
