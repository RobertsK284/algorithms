var IndexInsertionSorter = require('../src/indexInsertionSorter.js');

describe('IndexInsertionSorter', function () {

  beforeEach(function(){
    indexInsertionSorter = new IndexInsertionSorter();
    array = [23, 1, 6, 30, 4, 7, 5];
  });

  it('begins with an empty array', function () {
    expect(indexInsertionSorter.sortedArray).toEqual([]);
  });

  it('puts numbers in sortedArray according to index in original array', function () {
    indexInsertionSorter.sort(array, indexInsertionSorter.sortedArray);
    expect(indexInsertionSorter.sortedArray[0]).toEqual(1);
  });

  it('sorts the numbers in an array in ascending order', function () {
    indexInsertionSorter.sort(array, indexInsertionSorter.sortedArray);
    expect(indexInsertionSorter.sortedArray).toEqual([1, 4, 5, 6, 7, 23, 30]);
  });
});
