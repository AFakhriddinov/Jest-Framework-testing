const stringLength = require("./task1");

test('"hello" should be 5', () => {
  expect(stringLength("hello")).toBe(5);
});
test('"present" should be 7', () => {
  expect(stringLength("present")).toBe(7);
});
test('"Abdulaziz" should be 9', () => {
  expect(stringLength("Abdulaziz")).toBe(9);
});
test("more than expected", () => {
  expect(() => {
    stringLength("dsdsdsdsdsdsdsdsdsd");
  }).toThrow();
});
test("empty", () => {
  expect(() => {
    stringLength("");
  }).toThrow();
});
