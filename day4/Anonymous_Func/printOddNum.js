(function() {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Use an anonymous function to filter and print odd numbers
  (function(arr) {
    var oddNumbers = arr.filter(function(item) {
      return item % 2 !== 0;
    });

    console.log("Odd Numbers:", oddNumbers);
  })(array);
})();
