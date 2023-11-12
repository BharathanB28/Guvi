(function() {
   var array = ["level", "hello", "radar", "world", "civic"];
 
   // Use an anonymous function to filter and return palindromes
   var palindromes = (function(arr) {
     return arr.filter(function(item) {
       // Convert the item to lowercase for case-insensitive comparison
       var lowerCaseItem = item.toLowerCase();
       // Reverse the item and compare with the original to check for palindrome
       return lowerCaseItem === lowerCaseItem.split("").reverse().join("");
     });
   })(array);
 
   console.log("Palindromes:", palindromes);
 })();
 