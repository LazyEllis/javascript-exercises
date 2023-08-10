const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function (array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array.reduce((sum, number) => sum + number, 0);
  }
};

const multiply = function (array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array.reduce((product, number) => product * number, 1);
  }
};

const power = function (number, power) {
  return number ** power;
};

const factorial = function (number) {
  result = 1;

  if (number > 1) {
    for (let i = number; i >= 1; i--) {
      result *= i;
    }
    return result;
  } else {
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
