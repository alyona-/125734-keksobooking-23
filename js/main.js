// eslint-disable-next-line no-unused-vars
const getRandomNum =(min, max, decimalPlaces=0) =>{
  if(decimalPlaces<0 || decimalPlaces>20)  {decimalPlaces=0;}
  return (Math.random( ) * (max - min + 1) + min).toFixed(decimalPlaces);
};

// eslint-disable-next-line no-console
console.log(getRandomNum(2,5,20));
