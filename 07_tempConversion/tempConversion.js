const convertToCelsius = function(temperatureFar) {
  const temperatureCel = (temperatureFar - 32)*5/9;
  return Math.round(temperatureCel * 10) / 10; // return the temperature with one decimal place
};

const convertToFahrenheit = function(temperatureCel) {
  const temperatureFar = temperatureCel*9/5 + 32;
  return Math.round(temperatureFar * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
