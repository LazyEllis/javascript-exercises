const findTheOldest = function (array) {
  array.sort((firstPerson, nextPerson) => {
    let firstAge;
    let nextAge;

    if (firstPerson.yearOfDeath === undefined) {
      firstAge = new Date().getFullYear() - firstPerson.yearOfBirth;
    } else {
      firstAge = firstPerson.yearOfDeath - firstPerson.yearOfBirth;
    }

    if (nextPerson.yearOfDeath === undefined) {
      nextAge = new Date().getFullYear() - nextPerson.yearOfBirth;
    } else {
      nextAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
    }
    return firstAge > nextAge ? -1 : 1;
  });

  return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
