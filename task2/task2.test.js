const reverseString = require("./task2");

test('"laptop" reversed to "potpal"', () => {
  expect(reverseString("laptop")).toBe("potpal");
});

test('"good" reversed to "doog"', () => {
  expect(reverseString("good")).toBe("doog");
});

test('"go" reversed to "og"', () => {
  expect(reverseString("go")).toBe("og");
});
