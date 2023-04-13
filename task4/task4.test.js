const stringCap = require("./task4");

test("First letter capitalized", () => {
  expect(stringCap("hello")).toBe("Hello");
});
test("First letter capitalized", () => {
  expect(stringCap("good")).toBe("Good");
});
