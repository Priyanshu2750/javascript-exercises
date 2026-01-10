const reverseString = function (word) {
  let ans = "";
  for (let char of word) {
    ans = char + ans;
  }
  return ans;
};

// Do not edit below this line
module.exports = reverseString;
