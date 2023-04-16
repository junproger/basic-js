const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  let result = 0;
  const antiMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const tempArray = [];
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j]) {
        tempArray.push(matrix[j][i]);
      }
    };
    antiMatrix.push(tempArray);
  };
  for (let elem of antiMatrix) {
    for (let item of elem) {
      if (item === 0) break;
      result += item;
    }
  }
  return result;
};

module.exports = { getMatrixElementsSum };
