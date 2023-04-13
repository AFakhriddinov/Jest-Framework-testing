const stringLength = (string) => {
  if (string.length > 1 && string.length < 10) {
    return string.length;
  } else {
    throw new Error(
      "the string should be at least 1 character long and not more than 10"
    );
  }
};
module.exports = stringLength;
