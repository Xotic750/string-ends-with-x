import attempt from 'attempt-x';
import toInteger from 'to-integer-x';
import requireObjectCoercible from 'require-object-coercible-x';
import toStr from 'to-string-x';
import isRegExp from 'is-regexp-x';
import numberIsNaN from 'is-nan-x';
import clamp from 'math-clamp-x';
import toBoolean from 'to-boolean-x';
var ERR_MSG = 'Cannot call method "endsWith" with a regex';
var ew = ERR_MSG.endsWith,
    charCodeAt = ERR_MSG.charCodeAt;
var nativeEndsWith = typeof ew === 'function' && ew;

var test1 = function test1() {
  return attempt.call('/a/', nativeEndsWith, /a/).threw;
};

var test2 = function test2() {
  var res = attempt.call('abc', nativeEndsWith, 'c', -1 / 0);
  return res.threw === false && res.value === false;
};

var test3 = function test3() {
  var res = attempt.call(123, nativeEndsWith, '3');
  return res.threw === false && res.value === true;
};

var test4 = function test4() {
  return attempt.call(null, nativeEndsWith, 'n').threw;
};

var isWorking = toBoolean(nativeEndsWith) && test1() && test2() && test3() && test4();

var patchedEndsWith = function endsWith(string, searchString) {
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

var assertNotRegexp = function assertNotRegexp(searchString) {
  if (isRegExp(searchString)) {
    throw new TypeError(ERR_MSG);
  }

  return searchString;
};

var getLength = function getLength(args, stringLength) {
  var length = stringLength;

  if (args.length > 2) {
    var position = args[2];

    if (typeof position !== 'undefined') {
      length = toInteger(position);

      if (numberIsNaN(length)) {
        length = 0;
      }
    }
  }

  return length;
};

var predicate = function predicate(obj) {
  var str = obj.str,
      searchStr = obj.searchStr,
      start = obj.start,
      searchLength = obj.searchLength;

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
}; // Firefox (< 37?) and IE 11 TP have a non-compliant startsWith implementation


export var implementation = function endsWith(string, searchString) {
  var str = toStr(requireObjectCoercible(string));
  assertNotRegexp(searchString);
  var stringLength = str.length;
  var searchStr = toStr(searchString);
  var searchLength = searchStr.length;
  /* eslint-disable-next-line prefer-rest-params */

  var length = getLength(arguments, stringLength);
  var end = clamp(length, 0, stringLength);
  var start = end - searchLength;
  return predicate({
    str: str,
    searchStr: searchStr,
    start: start,
    searchLength: searchLength
  });
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

var $endsWith = isWorking ? patchedEndsWith : implementation;
export default $endsWith;

//# sourceMappingURL=string-ends-with-x.esm.js.map