(function() {
    var array = [1, 2, 3, 4, 5];
  
    // Use an anonymous function to calculate the sum
    var sum = (function(arr) {
      return arr.reduce(function(acc, current) {
        return acc + current;
      }, 0);
    })(array);
  
    console.log("Sum:", sum);
  })();
  