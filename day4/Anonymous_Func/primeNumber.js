(function() {
  var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // Use an anonymous function to filter and return prime numbers
  var primeNumbers = (function(arr) {
    function isPrime(num) {
      if (num < 2) return false;
      for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }

    return arr.filter(function(item) {
      return isPrime(item);
    });
  })(array);

  console.log("Prime Numbers:", primeNumbers);
})();
