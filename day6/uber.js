class UberPriceCalculator {
  constructor(distance, duration, surgeMultiplier = 1) {
      this.distance = distance;
      this.duration = duration;
      this.surgeMultiplier = surgeMultiplier;
  }

  calculatePrice(baseFare = 2, costPerMile = 1.5, costPerMinute = 0.2) {
      const totalFare = baseFare +
          (this.distance * costPerMile * this.surgeMultiplier) +
          (this.duration * costPerMinute);

      return totalFare.toFixed(2); // Round to two decimal places
  }
}

// Example usage:
const uberRide = new UberPriceCalculator(10, 20, 1.5); // 10 miles, 20 minutes, surge multiplier of 1.5
const price = uberRide.calculatePrice();

console.log(`Uber Price: $${price}`);
