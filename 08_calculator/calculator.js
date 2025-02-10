const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
	while(array.length >0){
    sum += array.pop();
  }
  return sum;
};

const multiply = function(array) {
  let multiple = 1;
  while(array.length > 0){
    multiple *= array.pop();
  }
  return multiple;
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(num, sum = 1) {
  while(num > 0){
    sum *= num;
    return factorial (num - 1, sum);
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
