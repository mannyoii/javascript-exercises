const palindromes = function (string) {
  let newStr = string.toLowerCase().replace(/[^a-z]/g, "");
  return newStr.split("").reverse().join("") === newStr;
};

// Do not edit below this line
module.exports = palindromes;
