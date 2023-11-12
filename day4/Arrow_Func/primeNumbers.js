const array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Use arrow functions to filter and return prime numbers
const isPrime = num => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeNumbers = array.filter(isPrime);

console.log("Prime Numbers:", primeNumbers);
