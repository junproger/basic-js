const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(str1, str2) {
	let counter = 0;
	function countChars() {
		return counter += 1;
	};
	for (let chr1 of str1) {
		if (str2.includes(chr1)) {
			str2 = str2.replace(chr1, '');
			countChars();
		} else {
			continue;
		};
	};
	return counter || 0;
};

module.exports = {
  getCommonCharacterCount
};
