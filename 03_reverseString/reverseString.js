const reverseString = function (string) {
  const stringToArray = string.split("");
  const arrayReverse = stringToArray.reverse();
  const arrayToStrReverse = arrayReverse.join("");
  return arrayToStrReverse;
};

// Do not edit below this line
module.exports = reverseString;
