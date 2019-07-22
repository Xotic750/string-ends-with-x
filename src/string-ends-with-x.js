import attempt from 'attempt-x';
import toInteger from 'to-integer-x';
import requireObjectCoercible from 'require-object-coercible-x';
import toStr from 'to-string-x';
import isRegExp from 'is-regexp-x';
import numberIsNaN from 'is-nan-x';
import clamp from 'math-clamp-x';

const ERR_MSG = 'Cannot call method "endsWith" with a regex';
const {endsWith: ew, charCodeAt} = ERR_MSG;
const nativeEndsWith = typeof ew === 'function' && ew;

let isWorking;

if (nativeEndsWith) {
  let res = attempt.call('/a/', nativeEndsWith, /a/);
  isWorking = res.threw;

  if (isWorking) {
    res = attempt.call('abc', nativeEndsWith, 'c', -1 / 0);
    isWorking = res.threw === false && res.value === true;
  }

  if (isWorking) {
    res = attempt.call(123, nativeEndsWith, '1');
    isWorking = res.threw === false && res.value === true;
  }

  if (isWorking) {
    res = attempt.call(null, nativeEndsWith, 'n');
    isWorking = res.threw;
  }
}

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
let $endsWith;

if (isWorking) {
  $endsWith = function endsWith(string, searchString) {
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
} else {
  // Firefox (< 37?) and IE 11 TP have a noncompliant startsWith implementation
  $endsWith = function endsWith(string, searchString) {
    const str = toStr(requireObjectCoercible(string));

    if (isRegExp(searchString)) {
      throw new TypeError(ERR_MSG);
    }

    const stringLength = str.length;
    const searchStr = toStr(searchString);
    const searchLength = searchStr.length;
    let length = stringLength;

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params */
      const position = arguments[2];

      if (typeof position !== 'undefined') {
        length = toInteger(position);

        if (numberIsNaN(length)) {
          length = 0;
        }
      }
    }

    const end = clamp(length, 0, stringLength);
    const start = end - searchLength;

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
}

const sew = $endsWith;

export default sew;
