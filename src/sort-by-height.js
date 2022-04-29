const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let newArr = Array.from(arr);
  let arrPositions = [];
  for (let i = (newArr.length - 1); i >= 0; i--) {
    if (arr[i] === -1) {
      arrPositions.push(i);
      newArr.splice(i, 1);
    }
  }
  newArr.sort((a, b) => {
    return a - b;
  })
  arrPositions.sort((a, b) => {
    return a -b;
  })
  for (let i = 0; i < arrPositions.length; i++) {
    newArr.splice(arrPositions[i], 0, -1);
  }
  return newArr;
}

module.exports = {
  sortByHeight
};
