import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './testing-practice';

it('capitalize — lowercase', () => expect(capitalize('dog')).toBe('Dog'));
it('capitalize — uppercase', () => expect(capitalize('HELLO')).toBe('HELLO'));
it('capitalize — punctuation', () => expect(capitalize('hello world!')).toBe('Hello world!'));
it('capitalize — empty string', () => expect(capitalize('')).toBe(''));

it('reverse — lowercase', () => expect(reverseString('dog')).toBe('god'));
it('reverse — uppercase', () => expect(reverseString('FOOD')).toBe('DOOF'));
it('reverse — punctuation', () => expect(reverseString('hello world!')).toBe('!dlrow olleh'));
it('reverse — empty string', () => expect(reverseString('')).toBe(''));

it('calculator — add 2 + 2', () => expect(calculator.add(2, 2)).toBe(4));
it('calculator — subtract 4 - 1', () => expect(calculator.subtract(4, 1)).toBe(3));
it('calculator — divide 6 / 3', () => expect(calculator.divide(6, 3)).toBe(2));
it('calculator — multiply 5 * 10', () => expect(calculator.multiply(5, 10)).toBe(50));

it('caesarCipher — lowercase', () => expect(caesarCipher('caesar', 1)).toBe('dbftbs'));
it('caesarCipher — uppercase', () => expect(caesarCipher('CAESAR', 3)).toBe('FDHVDU'));
it('caesarCipher — mixed case', () => expect(caesarCipher('Caesar', 5)).toBe('Hfjxfw'));
it('caesarCipher — modulo', () => expect(caesarCipher('z', 1)).toBe('a'));
it('caesarCipher — punctuation', () => expect(caesarCipher('@_- !', 1)).toBe('@_- !'));

it('analyzeArray — empty array', () => expect(analyzeArray([])).toBe('Array must not be empty'));
it('analyzeArray — non-numeric', () =>
  expect(analyzeArray([1, 2, 3, 'a', 'b', 'c'])).toBe('Array must only contain numbers'));
it('analyzeArray — array of length 1', () =>
  expect(analyzeArray([1])).toStrictEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  }));
it('analyzeArray — mixed array', () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }));
