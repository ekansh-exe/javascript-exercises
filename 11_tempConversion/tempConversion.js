const convertToCelsius = function(tempF) {
    const a = (tempF - 32)*(5/9);
    return Math.round(a * 10) / 10   
};

const convertToFahrenheit = function(tempC) {
  return Math.round(((tempC * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
