const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(arr) {
	let res = [];
	const map = new Map();
	for (let itm of arr) {
		if (!map.has(itm)) {
			map.set(itm, 1);
		} else {
			let cnt = map.get(itm);
			map.set(itm, cnt + 1);
			itm = itm + `(${cnt})`;
			map.set(itm, cnt);
		};
	};
	for (let key of map.keys()) {
		res.push(key);
	};
	return res;
};

module.exports = {
  renameFiles
};