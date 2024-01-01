class Shape {
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
  
    calcPerimeter() {
      const perimeter = this.sides * this.sideLength;
      console.log(`Perimeter of ${this.name}: ${perimeter}`);
    }
  }
  
  class Square extends Shape {
    constructor(sideLength) {
      super("square", 4, sideLength);
    }
  
    calcArea() {
      const area = this.sideLength * this.sideLength;
      console.log(`Area of square: ${area}`);
    }
  }
  
  // Create a square instance
  const square = new Square(5);
  square.calcPerimeter();
  square.calcArea();