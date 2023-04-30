const removeFromArray = function (arr, ...num) {
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; i < arr.length; j++) {
      if (num[i] === arr[j]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
