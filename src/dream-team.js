const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(input) {
	function isInput(input) {
		if (!input) {
			return false;
		} else if (!Array.isArray(input)) {
			return false;
		} else {
			return true;
		};
	};
	function isValid(elm) {
		if (typeof elm !== 'string') {
			return false;
		} else {
			return true;
		};
	};
	let result = [];
	if (isInput(input)) {
		for (let elm of input) {
			if (isValid(elm)) {
				elm = elm.trim().toUpperCase();
				result.push(elm[0]);
			};
		};
	};
	result = result.sort().join('');
	return result;
};

module.exports = {
  createDreamTeam
};
