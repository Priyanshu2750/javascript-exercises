const removeFromArray = function (arr, ...rest) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (rest.includes(arr[i]) == false) newArr.push(arr[i]);
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
