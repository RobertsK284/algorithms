var CohortGrouper = require('../src/cohortGrouper.js');

describe('CohortGrouper', function() {

  beforeEach(function(){
    cohortGrouper = new CohortGrouper();
    array = ["Aaron Gill", "Abdirizak Obsiye", "Ajay M", "Alex Eccles", "Dana Gajewska",
            "David Gisbey", "Joe Coker", "Karen Roberts", "Nimalan Kirubakaran", "Paul Fazackerley"];
  });

  it('begins with an empty array', function () {
    expect(cohortGrouper.groupList).toEqual([]);
  });

  describe('divide', function () {
    it('adds the specified number of empty groups to the groupList', function () {
      cohortGrouper.divide(array, 4, cohortGrouper.groupList);
      expect(cohortGrouper.groupList.length).toEqual(4);
    });
    it('distributes people evenly into the specified number of groups', function () {
      cohortGrouper.divide(array, 4, cohortGrouper.groupList);
      expect(cohortGrouper.groupList[0].length).toEqual(3);
      expect(cohortGrouper.groupList[3].length).toEqual(2);
    });
  });
});
