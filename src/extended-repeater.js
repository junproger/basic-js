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
	let base = str + '';
	let separator = options.separator || '+';
	let addsepar = options.additionSeparator || '|';
	let repeatTimes = options.repeatTimes || 1;
	let additionTimes = options.additionRepeatTimes || 1;
	let result = [];
	let addres = [];
	function selectOptions() {
		if (options.hasOwnProperty("addition")) {
			let addition = options.addition + '';
			repeatLevel2(addition);
		} else {
			repeatLevel1();
		};
	};
	selectOptions(options);
	function repeatLevel2(addition) {
		let addcount = 0;
		let addtimes = additionTimes;
		while (addcount < addtimes) {
			addcount += 1;
			addres.push(addition);
		};
		addres = addres.join(addsepar);
		repeatLevel1();
	};
	function repeatLevel1() {
		let count = 0;
		let times = repeatTimes;
		while (count < times) {
			count += 1;
			result.push(base + addres);
		};
		result = result.join(separator);
	};
	return result;
};

module.exports = {
  repeater
};
