import attempt from 'attempt-x';
import toInteger from 'to-integer-x';
import requireObjectCoercible from 'require-object-coercible-x';
import toStr from 'to-string-x';
import isRegExp from 'is-regexp-x';
import numberIsNaN from 'is-nan-x';
import clamp from 'math-clamp-x';
var ERR_MSG = 'Cannot call method "endsWith" with a regex';
var ew = ERR_MSG.endsWith,
    charCodeAt = ERR_MSG.charCodeAt;
var nativeEndsWith = typeof ew === 'function' && ew;
var isWorking;

if (nativeEndsWith) {
  var res = attempt.call('/a/', nativeEndsWith, /a/);
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


var $endsWith;

if (isWorking) {
  $endsWith = function endsWith(string, searchString) {
    var str = toStr(requireObjectCoercible(string));

    if (isRegExp(searchString)) {
      throw new TypeError(ERR_MSG);
    }

    var args = [searchString];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativeEndsWith.apply(str, args);
  };
} else {
  // Firefox (< 37?) and IE 11 TP have a noncompliant startsWith implementation
  $endsWith = function endsWith(string, searchString) {
    var str = toStr(requireObjectCoercible(string));

    if (isRegExp(searchString)) {
      throw new TypeError(ERR_MSG);
    }

    var stringLength = str.length;
    var searchStr = toStr(searchString);
    var searchLength = searchStr.length;
    var length = stringLength;

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params */
      var position = arguments[2];

      if (typeof position !== 'undefined') {
        length = toInteger(position);

        if (numberIsNaN(length)) {
          length = 0;
        }
      }
    }

    var end = clamp(length, 0, stringLength);
    var start = end - searchLength;

    if (start < 0) {
      return false;
    }

    var index = 0;

    while (index < searchLength) {
      if (charCodeAt.call(str, start + index) !== charCodeAt.call(searchStr, index)) {
        return false;
      }

      index += 1;
    }

    return true;
  };
}

var sew = $endsWith;
export default sew;

//# sourceMappingURL=string-ends-with-x.esm.js.map