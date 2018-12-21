  function Shuffler() {
    this.shuffledArray = [];

    this.originalArray = [];

    this.shuffle = function(array) {
      var tempArray = Object.assign([], array);

      for (var i = 0; i < tempArray.length - 1; i++) {
        var randIndex = Math.floor(Math.random() * array.length);
        var y = tempArray[randIndex];
        tempArray[randIndex] = tempArray[i];
        tempArray[i] = y;
      }
      this.shuffledArray = tempArray;
      return this.shuffledArray;
    };
  }

  if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
  {
      module.exports = Shuffler;
  }
