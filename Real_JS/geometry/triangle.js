class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  perimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  area() {
    // Heron's formula: area = sqrt(s * (s-a) * (s-b) * (s-c))
    const s = this.perimeter() / 2;
    return Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC)
    );
  }
}

const triangle = new Triangle(3, 4, 5);

module.exports = { Triangle, triangle };