class UberPriceCalculator {
    constructor(basePrice, distancePrice, timePrice) {
      this.basePrice = basePrice;
      this.distancePrice = distancePrice;
      this.timePrice = timePrice;
    }
  
    calculatePrice(distance, time) {
      return this.basePrice + this.distancePrice * distance + this.timePrice * time;
    }
  }
  
  // Example usage:
  
  const uberPriceCalculator = new UberPriceCalculator(2.5, 0.5, 0.25);
  
  // Calculate the price for a 10 km ride that takes 30 minutes:
  
  const price = uberPriceCalculator.calculatePrice(10, 30);
  
  console.log(price);
  