const sumAll = function (firstNum, secondNum) {
  // if (firstNum < 0 || secondNum || 0) return "ERROR";
  if (typeof firstNum === "number" && typeof secondNum === "number") {
    if (firstNum >= 0 && secondNum >= 0) {
      return firstNum < secondNum
        ? [secondNum * (firstNum + secondNum)] / 2
        : [firstNum * (firstNum + secondNum)] / 2;
    } else return "ERROR";
  } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
