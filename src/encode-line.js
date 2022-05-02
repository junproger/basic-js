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
	let cnt = 0;
	let res = '';
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			cnt = cnt || 1;
			cnt += 1;
		} else {
			res += cnt || '';
			res += str[i];
			cnt = 0;
		};
	};
	return res;
};

module.exports = {
  encodeLine
};
