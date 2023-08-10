const sumAll = function (firstNumber, lastNumber) {
  let sum = 0;
  let fNum;
  let lNum;

  if (
    firstNumber < 0 ||
    lastNumber < 0 ||
    typeof firstNumber !== 'number' ||
    typeof lastNumber !== 'number'
  ) {
    return 'ERROR';
  } else if (firstNumber >= lastNumber) {
    fNum = lastNumber;
    lNum = firstNumber;
  } else if (firstNumber < lastNumber) {
    fNum = firstNumber;
    lNum = lastNumber;
  }

  for (let i = fNum; i <= lNum; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
