const sumAll = function (start, end) {
  let sum = 0;
  if (typeof start != "number" || typeof end != "number") return "ERROR";
  if (start < 0 || end < 0) return "ERROR";
  if (Math.ceil(start) != start || Math.ceil(end) != end) return "ERROR";
  for (let i = Math.min(start, end); i <= Math.max(start, end); i++) sum += i;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
