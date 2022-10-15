const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  constructor() {
    this.depths = [];
  }
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    } else {
      this.depths = arr.map(item => {
        return this.calculateDepth(item);
      })
      return 1 + Math.max(0, ...this.depths);
    }
  }
}

module.exports = {
  DepthCalculator
};
