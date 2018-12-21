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
      var shuffle = function (a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
      };

    shuffle(array);

    var start = Date.now();

    array.sort();

    var end = Date.now();
    var timeTaken = end - start;
    
    times.push(timeTaken);
  }
  while (times.length < 10);

  var sum = 0;

  times.forEach(function(value) {
    sum += value;
  });

  var average = sum/times.length;
  console.log('The average amount of time to sort an array of ' + array.length +
  ' values is ' + average + ' milliseconds.');
  array_size += 5000;
}
while (array_size < 105000);
