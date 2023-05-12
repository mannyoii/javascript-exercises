const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  let total = arr.reduce((sum, current) => sum + current, 0);
  return total;
};

const multiply = function (arr) {
  let result = arr.reduce((sum, current) => sum * current, 1);
  return result;
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  let facto = 1;
  for (let i = x; i > 0; i--) {
    facto *= i;
  }
  return facto;
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
