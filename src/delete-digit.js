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

function deleteDigit(number) {
	let num = number.toString();
	let min = Math.min(...num);
	if (num.length === 3) {
		if (num[1] > num[0]) {
			execute(num[0])
		} else {
			execute(min);
		};
	} else {
		execute(min);
	};
	function execute(val) {
		num = num.replace(val, '');
	};
	return Number(num);
};

module.exports = {
  deleteDigit
};
