const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(array) {
  let counter = 0;
  const originArray = [...array];
  const sortedArray = array.filter((elm) => elm > 0).sort((a, b) => a - b);
  originArray.forEach((elem, indx) => {
    if (elem > 0) {
      originArray[indx] = sortedArray[counter];
      counter += 1;
    }
  });
  return originArray;
}

module.exports = { sortByHeight };
