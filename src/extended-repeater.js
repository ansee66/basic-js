const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let newStr = String(str);
  let adds = options.addition;
  
  if (adds && typeof adds !== "string") {
    adds = String(options.addition);
  } 
  if (options.additionRepeatTimes) {
    if (options.additionSeparator) {
      adds += options.additionSeparator;
    } else {
      adds += "|";
    }
    adds = adds.repeat(options.additionRepeatTimes);
    let lengthOfAddSeparator = 1;
    if (options.additionSeparator) {
      lengthOfAddSeparator = options.additionSeparator.length ;
    }
    adds = adds.slice(0, -lengthOfAddSeparator);
  }
  
  if (adds) {
    newStr += adds;
  }

  if (options.repeatTimes) {
    if (options.separator) {
      newStr += options.separator;
    } else {
      newStr += "+"
    }
    newStr = newStr.repeat(options.repeatTimes);
    let lengthOfSeparator = 1;
    if (options.separator) {
      lengthOfSeparator = options.separator.length ;
    }
    newStr = newStr.slice(0, -lengthOfSeparator);
  }
  return newStr;
}


module.exports = {
  repeater
};
