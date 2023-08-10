const fibonacci = function (number) {
  let sequence = [];

  if (number < 0) {
    return 'OOPS';
  } else {
    for (let i = 0; i < number; i++) {
      if (i < 2) {
        sequence.splice(i, 0, 1);
      } else {
        sequence.splice(i, 0, sequence[i - 1] + sequence[i - 2]);
      }
    }
  }

  return sequence[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
