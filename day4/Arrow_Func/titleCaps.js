const stringArray = ["hello", "world", "javascript", "example"];

// Use arrow functions to convert to title case
const titleCapsArray = stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

console.log("Original Array:", stringArray);
console.log("Title Caps Array:", titleCapsArray);
