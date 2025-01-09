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

function sortByAsc(arr) {
  const sortedArr = arr;

  for (let i = 1; i < arr.length; i += 1) {
    const current = sortedArr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      sortedArr[j + 1] = sortedArr[j];
      j -= 1;
    }
    sortedArr[j + 1] = current;
  }

  return sortedArr;
}

function shuffleChar(str, iterations) {
  if (!str || iterations <= 0) {
    return str;
  }

  const len = str.length;
  const visited = {};
  let currentStr = str;
  let cycleFound = false;
  let cycleStartIteration = 0;
  let cycleLength = 0;

  for (let iteration = 0; iteration < iterations; iteration += 1) {
    let evenChars = '';
    let oddChars = '';

    for (let i = 0; i < len; i += 1) {
      if (i % 2 === 0) {
        evenChars += currentStr[i];
      } else {
        oddChars += currentStr[i];
      }
    }

    currentStr = evenChars + oddChars;

    if (visited[currentStr]) {
      cycleFound = true;
      cycleStartIteration = visited[currentStr];
      cycleLength = iteration - cycleStartIteration;
      break;
    }
    visited[currentStr] = iteration;
  }

  if (cycleFound) {
    const remainingIterations =
      (iterations - cycleStartIteration) % cycleLength;

    currentStr = str;
    for (let i = 0; i < cycleStartIteration; i += 1) {
      let evenChars = '';
      let oddChars = '';
      for (let j = 0; j < len; j += 1) {
        if (j % 2 === 0) {
          evenChars += currentStr[j];
        } else {
          oddChars += currentStr[j];
        }
      }
      currentStr = evenChars + oddChars;
    }

    for (let i = 0; i < remainingIterations; i += 1) {
      let evenChars = '';
      let oddChars = '';
      for (let j = 0; j < len; j += 1) {
        if (j % 2 === 0) {
          evenChars += currentStr[j];
        } else {
          oddChars += currentStr[j];
        }
      }
      currentStr = evenChars + oddChars;
    }

    return currentStr;
  }

  return currentStr;
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
function getNearestBigger(number) {
  const digitsArr = [];
  let temp = number;

  while (temp > 0) {
    digitsArr.push(temp % 10);
    temp = Math.floor(temp / 10);
  }

  digitsArr.reverse();

  const n = digitsArr.length;

  let i = n - 2;
  while (i >= 0 && digitsArr[i] >= digitsArr[i + 1]) i -= 1;

  let j = n - 1;
  while (j > 1 && digitsArr[j] <= digitsArr[i]) j -= 1;

  [digitsArr[i], digitsArr[j]] = [digitsArr[j], digitsArr[i]];

  let left = i + 1;
  let right = n - 1;

  while (left < right) {
    [digitsArr[left], digitsArr[right]] = [digitsArr[right], digitsArr[left]];
    left += 1;
    right -= 1;
  }

  let res = 0;
  for (let k = 0; k < digitsArr.length; k += 1) {
    res = res * 10 + digitsArr[k];
  }

  return res;
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
