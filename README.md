<a href="https://travis-ci.org/Xotic750/string-ends-with-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/string-ends-with-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/string-ends-with-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/string-ends-with-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/string-ends-with-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/string-ends-with-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/string-ends-with-x"
  title="npm version">
<img src="https://badge.fury.io/js/string-ends-with-x.svg"
  alt="npm version" height="18">
</a>
<a href="https://www.jsdelivr.com/package/npm/string-ends-with-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/string-ends-with-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>

<a name="module_string-ends-with-x"></a>

## string-ends-with-x

Determines whether a string ends with the characters of a specified string.

<a name="exp_module_string-ends-with-x--module.exports"></a>

### `module.exports` ⇒ <code>boolean</code> ⏏

This method determines whether a string begins with the characters of a
specified string, returning true or false as appropriate.

**Kind**: Exported member  
**Returns**: <code>boolean</code> - `true` if the given characters are found at the end
of the string; otherwise, `false`.  
**Throws**:

- <code>TypeError</code> If string is null or undefined.
- <code>TypeError</code> If searchString is a RegExp.

| Param        | Type                | Description                                                                              |
| ------------ | ------------------- | ---------------------------------------------------------------------------------------- |
| string       | <code>string</code> | The string to be search.                                                                 |
| searchString | <code>string</code> | The characters to be searched for at the end of this string.                             |

**Example**

```js
import endsWith from 'string-ends-with-x';

const str = 'To be, or not to be, that is the question.';

console.log(endsWith(str, 'question.')); // true
console.log(endsWith(str, 'to be'));     // false
console.log(endsWith(str, 'to be', 19)); // true
```
