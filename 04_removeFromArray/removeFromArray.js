const removeFromArray = function (array, ...elements) {
  elements.forEach((element) => {
    element = array.indexOf(element);

    if (element >= 0) {
      array.splice(element, 1);
    }
  });

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
