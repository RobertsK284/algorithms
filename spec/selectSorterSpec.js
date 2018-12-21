var SelectSorter = require('../src/selectSorter.js');

describe('SelectSorter', function() {

  beforeEach(function() {
    selectSorter = new SelectSorter();
    array = [23, 1, 6, 30, 4, 7, 5];
  });

  it('begins with an empty array', function () {
    expect(selectSorter.sortedArray).toEqual([]);
  });

  it('puts numbers in sortedArray in order of value', function () {
    selectSorter.sort(array, selectSorter.sortedArray);
    expect(selectSorter.sortedArray).toEqual([1, 4, 5, 6, 7, 23, 30]);
  });
});
