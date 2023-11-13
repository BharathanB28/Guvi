class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(radius) {
      this._radius = radius;
    }
  
    get color() {
      return this._color;
    }
  
    set color(color) {
      this._color = color;
    }
  
    toString() {
      return `Circle[radius=${this.radius},color=${this.color}]`;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }

  const circle = new Circle();
console.log(circle.radius); // 1.0
console.log(circle.color); // "red"

circle.radius = 2.0;
circle.color = "green";

console.log(circle.radius); // 2.0
console.log(circle.color); // "green"

console.log(circle.getArea()); // 12.566370614359172
console.log(circle.getCircumference()); // 12.566370614359172
