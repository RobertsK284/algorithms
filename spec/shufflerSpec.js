var Shuffler = require('../src/shuffler.js');

describe('Shuffler', function() {

  beforeEach(function(){
    shuffler = new Shuffler();
    array = ["a", "b", "c", "d"];
    shuffler.originalArray = array;
    shuffler.shuffle(array);
  });

  describe('shuffle', function () {
    it('randomises order of values in an array', function (){
      expect(shuffler.shuffledArray).not.toEqual(shuffler.originalArray);
    });

    it('returns an array with the same number of values', function (){
      expect(shuffler.shuffledArray.length).toEqual(shuffler.originalArray.length);
    });

    it('should include all of the values in the original array', function(){
      for (var i = 0; i < array.length; i++) {
      expect(shuffler.shuffledArray).toContain(shuffler.originalArray[i]);
      }
    });
  });
});
