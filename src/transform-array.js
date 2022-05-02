const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform(array) {

	let outputArr = [];

	if (!Array.isArray(array)){
		throw new Error("'arr' parameter must be an instance of the Array!");
	};

	for(let i = 0; i < array.length; i++) {

		if (array[i] == '--discard-next') {
			i++;
		} else if (array[i] == '--discard-prev') {
			if (outputArr[outputArr.length - 1] == array[i-1]) {
				outputArr.pop();
			};
		} else if (array[i] == '--double-next') {
			if (array[i+1]) {
				outputArr.push(array[i+1]);
			};
		} else if (array[i] == '--double-prev') {
			if (outputArr[outputArr.length - 1] == array[i-1] && array[i-1]) {
				outputArr.push(array[i-1]);
			};
		} else {
			outputArr.push(array[i]);
		};
	};

	return outputArr;
};

module.exports = {
  transform
};
