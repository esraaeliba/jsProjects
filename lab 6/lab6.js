/////////////////////////////////////// LAB 6 /////////////////////////////////////////

////////////////////////////////// part1  //////////////////////////////////////
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
  
  
  const square = new Shape("square", 4, 5);
  
  square.calcPerimeter();
  
  const triangle = new Shape("triangle", 3, 3);
  
  triangle.calcPerimeter();
  

///////////////////////////////   part2  ///////////////////////////////////////

class Square extends Shape {
    constructor(sideLength) {
      super("square", 4, sideLength);
    }
  
    calcArea() {
      const area = this.sideLength * this.sideLength;
      console.log(`Area of ${this.name}: ${area}`);
    }
  }
  
  const ssquare = new Square(5);
  

  ssquare.calcPerimeter();
  ssquare.calcArea();

//////////////////////////////   part3  /////////////////////////////////////

class Triple {
    static customName = "Tripler";
    static description = "I triple any number you provide";
  
    static calculate(n = 1) {
      return n * 3;
    }
  }
  
  class SquaredTriple extends Triple {
    static description = "I square the triple of any number you provide";
    static longDescription;
  
    static calculate(n) {
      return super.calculate(n) ** 2;
    }
  }
  
  // Example test
  console.log(Triple.description); // 'I triple any number you provide'
  console.log(Triple.calculate()); // 3
  console.log(Triple.calculate(6)); // 18
  
  console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
  console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
  console.log(SquaredTriple.longDescription); // undefined
  console.log(SquaredTriple.customName); // 'Tripler'
  