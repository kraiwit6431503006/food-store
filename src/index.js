const calculateTotalPrice = require("./calculator");

// Example 1
const desk1 = {
  RED: 1,
  GREEN: 1
};

console.log("Desk#1 price:", calculateTotalPrice(desk1));
// => 90

// Example 2 (Member card)
console.log(
  "Desk#1 with member card:",
  calculateTotalPrice(desk1, true)
);
// => 81

// Example 3 (Orange double discount)
const desk2 = {
  ORANGE: 2
};

console.log("Desk#2 price:", calculateTotalPrice(desk2));
