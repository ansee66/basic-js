const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return chainMaker;
  },
  removeLink(position) {
    if (position <= 0 || typeof position !== "number" || position > this.chain.length || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let result = "";
    this.chain.map((letter, i) => {
      if (i === 0) {
        result += "( " + letter + " )";
      } else {
        result += "~~( " + letter + " )";
      }
    })
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
