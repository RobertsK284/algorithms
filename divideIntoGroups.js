var microtime = require('microtime');
var CohortGrouper = require('./src/cohortGrouper');
var getMedian = require('./getMedian');
var cohortGrouper = new CohortGrouper();
var array_size = 5000;

do{
  var array = [];
  var n = 0;

  do{
    array.push(n);
    n += 5;
  }
  while (array.length < array_size);

  var times = [];

  do{
    var start = microtime.now();

    cohortGrouper.divide(array, 4, cohortGrouper.groupList);

    var end = microtime.now();
    var timeTaken = end - start;

    times.push(timeTaken);
  }
  while (times.length < 20);

  var median = getMedian(times);
  console.log('The median amount of time to divide an array of ' + array.length +
  ' values into groups is ' + median + ' microseconds.');
  array_size += 5000;
}
while (array_size < 105000);
