export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  return str.split('').reverse().join('');
}

export const calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  divide: (x, y) => x / y,
  multiply: (x, y) => x * y,
};

function isPunctuation(char) {
  return !/^[A-Za-z]$/.test(char);
}

function isUpperCase(char) {
  return char === char.toUpperCase();
}

export function caesarCipher(str, shiftFactor) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    const charCode = str.charCodeAt(i);

    if (isPunctuation(char)) {
      result += char;
    } else if (isUpperCase(char)) {
      // if shiftFactor is high enough, wrap around from Z to A
      result += String.fromCharCode(((charCode + shiftFactor - 65) % 26) + 65);
    } else {
      result += String.fromCharCode(((charCode + shiftFactor - 97) % 26) + 97);
    }
  }
  return result;
}

export function analyzeArray(array) {
  if (array.length < 1) return undefined;
  return {
    average: array.reduce((acc, curr) => acc + curr, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
