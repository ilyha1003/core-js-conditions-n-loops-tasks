function isPositive(number) {
  return number >= 0;
}

function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

function canQueenCaptureKing(queen, king) {
  const intersectionRow = queen.x === king.x;
  const intersectionCol = queen.y === king.y;
  const intersectionDiag =
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y);

  return intersectionRow || intersectionCol || intersectionDiag;
}

function isIsoscelesTriangle(a, b, c) {
  if (a + b < c || a + c < b || b + c < a || a <= 0 || b <= 0 || c <= 0)
    return false;
  return a === b || a === c || b === c;
}

function convertToRomanNumerals(num) {
  const values = [100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ['C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let result = '';
  let i = 0;
  let number = num;

  while (number > 0) {
    if (number >= values[i]) {
      result += symbols[i];
      number -= values[i];
    } else i += 1;
  }

  return result;
}

function convertNumberToString(numberStr) {
  let res = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case ',':
        res += 'point ';
        break;
      case '.':
        res += 'point ';
        break;
      case '0':
        res += 'zero ';
        break;
      case '1':
        res += 'one ';
        break;
      case '2':
        res += 'two ';
        break;
      case '3':
        res += 'three ';
        break;
      case '4':
        res += 'four ';
        break;
      case '5':
        res += 'five ';
        break;
      case '6':
        res += 'six ';
        break;
      case '7':
        res += 'seven ';
        break;
      case '8':
        res += 'eight ';
        break;
      case '9':
        res += 'nine ';
        break;
      default:
        res += 'minus ';
        break;
    }
  }

  let finalStr = '';
  for (let i = 0; i < res.length - 1; i += 1) {
    finalStr += res[i];
  }
  return finalStr;
}

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

function isContainNumber(num, digit) {
  for (let i = 0; i < String(num).length; i += 1) {
    if (String(num)[i] === String(digit)) return true;
  }
  return false;
}

function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let leftPart = 0;
    let rightPart = 0;

    for (let j = 0; j < i; j += 1) {
      leftPart += arr[j];
    }

    for (let n = i + 1; n < arr.length; n += 1) {
      rightPart += arr[n];
    }

    if (leftPart === rightPart) return i;
  }

  return -1;
}

function getSpiralMatrix(size) {
  const matrix = new Array(size);

  for (let i = 0; i < matrix.length; i += 1) {
    matrix[i] = new Array(size);
    for (let j = 0; j < matrix[i].length; j += 1) {
      matrix[i][j] = 0;
    }
  }

  let num = 0;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i += 1) {
      num += 1;
      matrix[top][i] = num;
    }
    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      num += 1;
      matrix[i][right] = num;
    }
    right -= 1;

    for (let i = right; i >= left; i -= 1) {
      num += 1;
      matrix[bottom][i] = num;
    }
    bottom -= 1;

    for (let i = bottom; i >= top; i -= 1) {
      num += 1;
      matrix[i][left] = num;
    }
    left += 1;
  }

  return matrix;
}

function rotateMatrix(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  const newMatrix = matrix;
  const n = newMatrix.length;

  for (let i = 0; i < n / 2; i += 1) {
    for (let j = i; j < n - 1 - i; j += 1) {
      const temp = newMatrix[i][j];
      newMatrix[i][j] = newMatrix[n - 1 - j][i];
      newMatrix[n - 1 - j][i] = newMatrix[n - 1 - i][n - 1 - j];
      newMatrix[n - 1 - i][n - 1 - j] = newMatrix[j][n - 1 - i];
      newMatrix[j][n - 1 - i] = temp;
    }
  }

  return newMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(/* str, iterations */) {
  throw new Error('Not implemented');
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
