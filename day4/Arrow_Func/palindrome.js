const array = ["level", "hello", "radar", "world", "civic"];

// Use arrow functions to filter and return palindromes
const palindromes = array.filter(item => {
  const lowerCaseItem = item.toLowerCase();
  return lowerCaseItem === lowerCaseItem.split("").reverse().join("");
});

console.log("Palindromes:", palindromes);
