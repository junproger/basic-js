const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(input) {
	let arr1 = [];
	const obj1 = {};
	for (let elm of input) {
		elm = elm.split('.');
		elm = elm.reverse();
		arr1.push(`.${elm[0]}`);
		arr1.push(`.${elm[0]}.${elm[1]}`);
			if (elm[2]) {
			arr1.push(`.${elm[0]}.${elm[1]}.${elm[2]}`);
		};
	};
	for (let itm of arr1) {
		if (!obj1[itm]) {
			obj1[itm] = 1;
		} else {
			obj1[itm] += 1;
		};
	};
	return obj1 || {};
};

module.exports = {
  getDNSStats
};
