import attempt from 'attempt-x';
import toInteger from 'to-integer-x';
import requireObjectCoercible from 'require-object-coercible-x';
import toStr from 'to-string-x';
import isRegExp from 'is-regexp-x';
import numberIsNaN from 'is-nan-x';
import clamp from 'math-clamp-x';
import toBoolean from 'to-boolean-x';

const ERR_MSG = 'Cannot call method "endsWith" with a regex';
const {endsWith: ew, charCodeAt} = ERR_MSG;
const nativeEndsWith = typeof ew === 'function' && ew;

const test1 = function test1() {
  return attempt.call('/a/', nativeEndsWith, /a/).threw;
};

const test2 = function test2() {
  const res = attempt.call('abc', nativeEndsWith, 'c', -1 / 0);

  return res.threw === false && res.value === false;
};

const test3 = function test3() {
  const res = attempt.call(123, nativeEndsWith, '3');

  return res.threw === false && res.value === true;
};

const test4 = function test4() {
  return attempt.call(null, nativeEndsWith, 'n').threw;
};

const isWorking =  toBoolean(nativeEndsWith) && test1() && test2() && test3() && test4();

const patchedEndsWith = function patchedEndsWith() {
  return function endsWith(string, searchString) {
    const str = toStr(requireObjectCoercible(string));

    if (isRegExp(searchString)) {
      throw new TypeError(ERR_MSG);
    }

    const args = [searchString];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeEndsWith.apply(str, args);
  };
};

const assertNotRegexp = function assertNotRegexp(searchString) {
  if (isRegExp(searchString)) {
    throw new TypeError(ERR_MSG);
  }

  return searchString;
};

const getLength = function getLength(args, stringLength) {
  let length = stringLength;

  if (args.length > 2) {
    const position = args[2];

    if (typeof position !== 'undefined') {
      length = toInteger(position);

      if (numberIsNaN(length)) {
        length = 0;
      }
    }
  }

  return length;
};

const predicate = function predicate(obj) {
  const {str, searchStr, start, searchLength} = obj;

  if (start < 0) {
    return false;
  }

  let index = 0;
  while (index < searchLength) {
    if (charCodeAt.call(str, start + index) !== charCodeAt.call(searchStr, index)) {
      return false;
    }

    index += 1;
  }

  return true;
};

const implementation = function implementation() {
  // Firefox (< 37?) and IE 11 TP have a non-compliant startsWith implementation
  return function endsWith(string, searchString) {
    const str = toStr(requireObjectCoercible(string));

    assertNotRegexp(searchString);

    const stringLength = str.length;
    const searchStr = toStr(searchString);
    const searchLength = searchStr.length;
    /* eslint-disable-next-line prefer-rest-params */
    const length = getLength(arguments, stringLength);
    const end = clamp(length, 0, stringLength);
    const start = end - searchLength;

    return predicate({str, searchStr, start, searchLength});
  };
};

/**
 * The endsWith method determines whether a string ends with the characters of a specified string, returning true or
 * false as appropriate.
 *
 * @param {string} string - The string to search.
 * @throws {TypeError} If string is null or undefined.
 * @param {string} searchString - The characters to be searched for at the end of this string.
 * @throws {TypeError} If searchString is a RegExp.
 * @param {number} [length] - If provided it is used as the length of string. If omitted, the default value is the string length.
 * @returns {boolean} - `true` if the given characters are found at the end of the string; otherwise, `false`.
 */
const $endsWith = isWorking ? patchedEndsWith() : implementation();

export default $endsWith;
