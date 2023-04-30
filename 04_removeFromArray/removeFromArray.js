const removeFromArray = function (arr, ...num) {
  for (let i = 0; i < num.length; i++) {
    const index = arr.indexOf(num[i]);
    if (index > -1) {
      arr.splice(index, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
