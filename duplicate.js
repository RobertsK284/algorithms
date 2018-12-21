var microtime = require('microtime');
var DuplicateFinder = require('./src/duplicateFinder');
var getMedian = require('./getMedian');
var duplicateFinder = new DuplicateFinder();
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
    var start = microtime.now();

    duplicateFinder.findCopies(array);

    var end = microtime.now();

    var timeTaken = end - start;
    times.push(timeTaken);
  }
  while (times.length < 20);

  var median = getMedian(times);
  console.log('The median amount of time to check for duplicates for an array of ' +
  array.length + ' is ' + median + ' microseconds.');
  array_size += 5000;
}
while (array_size < 105000);
