(function() {
  var stringArray = ["hello", "world", "javascript", "example"];

  // Use an anonymous function to convert to title case
  var titleCapsArray = (function(arr) {
    return arr.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  })(stringArray);

  console.log("Original Array:", stringArray);
  console.log("Title Caps Array:", titleCapsArray);
})();
