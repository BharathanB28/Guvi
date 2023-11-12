(function() {
	var array = [1, 2, 3, 4, 5];
	var k = 2; // Number of rotations
  
	// Use an anonymous function to rotate the array
	var rotatedArray = (function(arr, rotations) {
	  var len = arr.length;
	  rotations = rotations % len; // Ensure k is within the array length
  
	  return arr.slice(rotations).concat(arr.slice(0, rotations));
	})(array, k);
  
	console.log("Original Array:", array);
	console.log("Rotated Array:", rotatedArray);
  })();
  