const stringCap = (string) => {
  const string2 = string.charAt(0).toUpperCase() + string.slice(1);
  return string2;
};
module.exports = stringCap;
