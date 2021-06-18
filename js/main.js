const getRandomNum = (min, max) => {
  if (min < 0 || max <= min) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const getDecimalPlaces = (min, max, decimalPlaces) => {
  if (min < 0 || max <= min || decimalPlaces < 0 || decimalPlaces > 20) {
    return null;
  }
  let num = Math.random() * (max - min + 1) + min;
  return num.toFixed(decimalPlaces);
};
