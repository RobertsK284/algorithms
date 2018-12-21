var microtime = require('microtime');
var array_size = 5000;

function getNanoSecTime() {
  var hrTime = process.hrtime();
  return hrTime[0] * 1000000000 + hrTime[1];
}

function getMedian(array) {
  array.sort(function(a, b) {
    return a - b;
  });
  var mid = array.length / 2;
  return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
}

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

    var last = array[array.length - 1];

    var end = microtime.now();

    var timeTaken = end - start;
    times.push(timeTaken);
  }
  while (times.length < 10);

  var sum = 0;

  times.forEach(function(value) {
    sum += value;
  });

  var average = sum/times.length;

  console.log('The average amount of time to get the last value of an array of ' +
   array.length + ' is ' + average * 1000 + ' nanoseconds.');
  array_size += 5000;
}
while (array_size < 105000);
