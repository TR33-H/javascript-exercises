const convertToCelsius = function(fahrenheit) {
  fahrenheit -=32;
  fahrenheit /= 1.8;
  if(Number.isInteger(fahrenheit)){
    return fahrenheit;
  }else{
    fahrenheit = Math.round(fahrenheit * 10) / 10;
    return fahrenheit;
  }
};

const convertToFahrenheit = function(celsius) {
  celsius *= 1.8;
  celsius += 32;
  if(Number.isInteger(celsius)){
    return celsius;
  }else{
    celsius = Math.round(celsius * 10) / 10;
    return celsius;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
