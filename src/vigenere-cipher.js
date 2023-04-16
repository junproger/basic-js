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
  constructor(direct = true) {
    this.direct = direct;
    this.tabula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.module = this.tabula.length;
  }

  encrypt(message, key) {
    const encode = [];
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyIndex = 0;
    for (let char of message) {
      if (this.tabula.includes(char)) {
        encode.push((this.tabula.indexOf(key[keyIndex % key.length]) + this.tabula.indexOf(char)) % this.module);
        keyIndex += 1;
      } else {
        encode.push(char);
      }
    };
    if (this.direct) {
      return encode.map((code) => typeof(code) !== 'number' ? code : this.tabula[code]).join('');
    } else {
      return encode.map((code) => typeof(code) !== 'number' ? code : this.tabula[code]).reverse().join('');
    }
  }

  decrypt(message, key) {
    const decode = [];
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyIndex = 0;
    for (let char of message) {
      if (this.tabula.includes(char)) {
        decode.push((this.tabula.indexOf(char) - this.tabula.indexOf(key[keyIndex % key.length]) + this.module) % this.module);
        keyIndex += 1;
      } else {
        decode.push(char);
      }
    };
    if (this.direct) {
      return decode.map((code) => typeof(code) !== 'number' ? code : this.tabula[code]).join('');
    } else {
      return decode.map((code) => typeof(code) !== 'number' ? code : this.tabula[code]).reverse().join('');
    }
  }

}

module.exports = { VigenereCipheringMachine };
