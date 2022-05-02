const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(input) {
	function isInput() {
		if (!input) {
			return false;
		} else if ((typeof input) !== 'string') {
			return false;
		} else if (isNaN(parseInt(input, 10))) {
			return false;
		} else {
			return true;
		};
	};
	function isValid() {
		if (input <= 0 || input >= 15) {
			return false;
		} else {
			return true;
		};
	};
	if (isInput() && isValid()) {
		const MODERN = 15;
		const PERIOD = (5730 / Math.LN2);
		let sample = Number.parseFloat(input);
		return Math.ceil(Math.log(MODERN / sample) * PERIOD);
	} else {
		return false;
	};
};

module.exports = {
  dateSample
};
