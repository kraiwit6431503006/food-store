const calculateTotalPrice = require("../src/calculator");

describe("Food Store Calculator", () => {
  test("Red + Green = 90", () => {
    const items = { RED: 1, GREEN: 1 };
    expect(calculateTotalPrice(items)).toBe(90);
  });

  test("Member discount 10%", () => {
    const items = { RED: 1, GREEN: 1 };
    expect(calculateTotalPrice(items, true)).toBe(81);
  });

  test("Double Orange discount 5%", () => {
    const items = { ORANGE: 2 };
    expect(calculateTotalPrice(items)).toBe(228);
  });

  test("Green double + member discount", () => {
    const items = { GREEN: 2 };
    expect(calculateTotalPrice(items, true)).toBe(68.4);
  });
});
