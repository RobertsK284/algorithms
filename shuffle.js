var Shuffler = require('./src/shuffler');
var getMedian = require('./getMedian');
var shuffler = new Shuffler();
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
    var start = Date.now();

    shuffler.shuffle(array);

    var end = Date.now();
    var timeTaken = end - start;

    times.push(timeTaken);
  }
  while (times.length < 20);

  var median = getMedian(times);
  console.log('The median amount of time to shuffle an array of ' + array.length +
  ' values is ' + median + ' milliseconds.');
  array_size += 5000;
}
while (array_size < 105000);
