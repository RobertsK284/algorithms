var microtime = require('microtime');
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

    var last = array.reverse();

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
   array.length + ' is ' + average + ' microseconds.');
  array_size += 5000;
}
while (array_size < 105000);
