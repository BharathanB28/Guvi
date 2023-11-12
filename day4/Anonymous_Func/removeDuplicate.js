(function() {
    var array = [1, 2, 3, 4, 2, 5, 6, 1];
  
    // Use an anonymous function to remove duplicates
    var uniqueArray = (function(arr) {
      return arr.filter(function(item, index, self) {
        return self.indexOf(item) === index;
      });
    })(array);
  
    console.log(uniqueArray);
  })();
  