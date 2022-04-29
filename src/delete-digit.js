const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrCutedNumbers = [];
  for (let i = 0; i < String(n).length; i++) {
    let arr = Array.from(String(n), Number);
    arr.splice(i, 1);
    arrCutedNumbers.push(Number(arr.join("")));
  }
  arrCutedNumbers.sort((a, b) => {
    return b - a;
  })
  return arrCutedNumbers[0];
}

module.exports = {
  deleteDigit
};
