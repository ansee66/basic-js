const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = direction;
    this.letters = ['A', "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }
  generateKey(words, key) {
    if (words.length !== key.length) {
      key = key.split("");
      let temp = key.length;   
      for (let i = 0; i < (words.length - temp); i++) {
        key.push(key[i]);
      }
      key = key.join("")
    }
    return key;
  }
  encrypt(words, key) {
    if (typeof words === 'undefined') throw new Error("Incorrect arguments!");
    if (typeof key === 'undefined') throw new Error("Incorrect arguments!");
    key = this.generateKey(words, key).toUpperCase();
    let result = [];
    let ind = 0;
    words.toUpperCase().split("").map((letter) => {
      if (this.letters.indexOf(letter) !== -1) {
        let index = (this.letters.indexOf(letter) + this.letters.indexOf(key[ind])) % 26;
        result.push(this.letters[index]);
        ind++;
      } else {
        result.push(letter);
      }
    })
    if (this.direction === false) {
      return result.reverse().join('');
    } else {
      return result.join('');
    }
  }
  decrypt(words, key) {
    if (typeof words === 'undefined') throw new Error("Incorrect arguments!");
    if (typeof key === 'undefined') throw new Error("Incorrect arguments!");
    key = this.generateKey(words, key).toUpperCase();
    let result = [];
    let ind = 0;
    words.toUpperCase().split("").map((letter) => {
      if (this.letters.indexOf(letter) !== -1) {
        let index = (this.letters.indexOf(letter) - this.letters.indexOf(key[ind])) % 26;
        if (index < 0) {
          index = 26 + index;
        }
        result.push(this.letters[index]);
        ind++;
      } else {
        result.push(letter);
      }
    })
    if (this.direction === false) {
      return result.reverse().join('');
    } else {
      return result.join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
