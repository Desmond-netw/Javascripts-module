const mathObj = {
  // Single-parameter methods
  abs(value) {
    return Math.abs(value);
  },

  isEven(value) {
    return value % 2 === 0;
  },

  isOdd(value) {
    return value % 2 !== 0;
  },

  isStrictlyPositive(value) {
    return value > 0;
  },

  // Two-parameter methods
  min(a, b) {
    return Math.min(a, b);
  },

  max(a, b) {
    return Math.max(a, b);
  },
};

console.log(mathObj.abs(-10)); // 10
console.log(mathObj.isEven(8)); // true
console.log(mathObj.isOdd(7)); // true
console.log(mathObj.isStrictlyPositive(5)); // true
console.log(mathObj.min(4, 9)); // 4
console.log(mathObj.max(4, 9)); // 9