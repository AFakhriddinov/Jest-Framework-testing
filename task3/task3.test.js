const Calculator = require("./task3");
describe("Add function", () => {
  const calc = new Calculator();
  test("3 + 3 = 6", () => {
    expect(calc.add(3, 3)).toBe(6);
  });
  test("2 + 2 = 4 ", () => {
    expect(calc.add(2, 2)).toBe(4);
  });
  test("1 + 1 = 2 ", () => {
    expect(calc.add(1, 1)).toBe(2);
  });

  test("1 - 1 = 0 ", () => {
    expect(calc.subtract(1, 1)).toBe(0);
  });
  test("3 - 1 = 2 ", () => {
    expect(calc.subtract(3, 1)).toBe(2);
  });
  test("4 - 1 = 3 ", () => {
    expect(calc.subtract(4, 1)).toBe(3);
  });

  test("4 / 2 = 2 ", () => {
    expect(calc.divide(4, 2)).toBe(2);
  });
  test("7 / 2 = 3.5 ", () => {
    expect(calc.divide(7, 2)).toBe(3.5);
  });
  test("10 / 5 = 2 ", () => {
    expect(calc.divide(10, 5)).toBe(2);
  });
  test("4 * 2 = 8 ", () => {
    expect(calc.multiply(4, 2)).toBe(8);
  });
  test("3 * 2 = 6 ", () => {
    expect(calc.multiply(3, 2)).toBe(6);
  });
  test("14 * 2 = 28 ", () => {
    expect(calc.multiply(14, 2)).toBe(28);
  });
});
