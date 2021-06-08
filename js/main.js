// eslint-disable-next-line no-unused-vars
const getRandomNum = (min, max) => {
  if (min < 0 || max <= min) {
    return null;
  }
  return (Math.random() * (max - min + 1) + min);
};

// eslint-disable-next-line no-unused-vars
const getDecimalPlaces = (num, decimalPlaces) => {
  if (decimalPlaces < 0 || decimalPlaces > 20 || num === null) {
    return null;
  }
  return num.toFixed(decimalPlaces);
};


// eslint-disable-next-line no-console
console.log(getDecimalPlaces(getRandomNum(6, 12), 3));
