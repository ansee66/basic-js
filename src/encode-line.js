const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i]) && str[i] === str[i - 1]) {
      arr[arr.lastIndexOf(str[i]) - 1]++;
    } else {
      arr.push(1, str[i]);
    }
  }
  let result = arr.join("").replace(/1/g, "");
  return result;
}

module.exports = {
  encodeLine
};
