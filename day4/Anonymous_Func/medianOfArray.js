(function() {
    var arr1 = [1, 3, 5, 7, 9];
    var arr2 = [2, 4, 6, 8, 10];
  
    // Use an anonymous function to find the median
    var findMedian = (function(arr1, arr2) {
      var mergedArray = arr1.concat(arr2);
      mergedArray.sort(function(a, b) {
        return a - b;
      });
  
      var length = mergedArray.length;
      var mid = Math.floor(length / 2);
  
      if (length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
      } else {
        return mergedArray[mid];
      }
    })(arr1, arr2);
  
    console.log("Median:", findMedian);
  })();
  