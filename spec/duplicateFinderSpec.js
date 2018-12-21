var DuplicateFinder = require('../src/duplicateFinder.js');

describe('DuplicateFinder', function () {

  function createArrayNoDuplicates(){
    duplicateFinder1 = new DuplicateFinder();
    array1 = ["a", "b", "c", "d"];
  }

  function createArrayWithDuplicates(){
    duplicateFinder2 = new DuplicateFinder();
    array2 = ["a", "b", "d", "b"];
  }

  describe('findCopies', function () {
    it('returns true if it does not find copies', function (){
      createArrayNoDuplicates();
      expect(duplicateFinder1.findCopies(array1)).toBe(true);
    });

    it('returns false if it finds copies', function (){
      createArrayWithDuplicates();
      expect(duplicateFinder2.findCopies(array2)).toBe(false);
    });
  });
});
