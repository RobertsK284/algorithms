var microtime = require('microtime');
var IndexInsertionSorter = require('./src/indexInsertionSorter.js');
var Shuffler = require('./src/shuffler');
var getMedian = require('./getMedian');
var shuffler = new Shuffler();
var indexInsertionSorter = new IndexInsertionSorter();
var array_size = 5000;

do{
  var array = [];

  do{
    var i = array_size;
    var n = Math.floor(Math.random() * (i + 1));
    array.push(n);
  }
  while (array.length < array_size);

    var times = [];

  do{

    shuffler.shuffle(array);

    var start = microtime.now();

    indexInsertionSorter.sort(array, indexInsertionSorter.sortedArray);

    var end = microtime.now();

    var timeTaken = end - start;
    times.push(timeTaken);
  }
  while (times.length < 20);

  var median = getMedian(times);
  console.log('The median amount of time to sort with my Index Sort method for an array of ' +
  array.length + ' is ' + median + ' microseconds.');
  array_size += 5000;
}
while (array_size < 105000);
