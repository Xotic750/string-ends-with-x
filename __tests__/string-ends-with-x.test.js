import endsWith from 'src/string-ends-with-x';

describe('endsWith', function() {
  it('a', function() {
    expect.assertions(6);
    expect(endsWith('undefined')).toBe(true);
    expect(endsWith('undefined', undefined)).toBe(true);
    expect(endsWith('undefined', null)).toBe(false);
    expect(endsWith('null')).toBe(false);
    expect(endsWith('null', undefined)).toBe(false);
    expect(endsWith('null', null)).toBe(true);
  });

  it('b', function() {
    expect.assertions(11);
    expect(endsWith('abc')).toBe(false);
    expect(endsWith('abc', '')).toBe(true);
    expect(endsWith('abc', '\0')).toBe(false);
    expect(endsWith('abc', 'c')).toBe(true);
    expect(endsWith('abc', 'b')).toBe(false);
    expect(endsWith('abc', 'ab')).toBe(false);
    expect(endsWith('abc', 'bc')).toBe(true);
    expect(endsWith('abc', 'abc')).toBe(true);
    expect(endsWith('abc', 'bcd')).toBe(false);
    expect(endsWith('abc', 'abcd')).toBe(false);
    expect(endsWith('abc', 'bcde')).toBe(false);
  });

  it('c', function() {
    expect.assertions(11);
    expect(endsWith('abc', '', NaN)).toBe(true);
    expect(endsWith('abc', '\0', NaN)).toBe(false);
    expect(endsWith('abc', 'c', NaN)).toBe(false);
    expect(endsWith('abc', 'b', NaN)).toBe(false);
    expect(endsWith('abc', 'a', NaN)).toBe(false);
    expect(endsWith('abc', 'ab', NaN)).toBe(false);
    expect(endsWith('abc', 'bc', NaN)).toBe(false);
    expect(endsWith('abc', 'abc', NaN)).toBe(false);
    expect(endsWith('abc', 'bcd', NaN)).toBe(false);
    expect(endsWith('abc', 'abcd', NaN)).toBe(false);
    expect(endsWith('abc', 'bcde', NaN)).toBe(false);
  });

  it('d', function() {
    expect.assertions(11);
    expect(endsWith('abc', '')).toBe(true);
    expect(endsWith('abc', '\0')).toBe(false);
    expect(endsWith('abc', 'c')).toBe(true);
    expect(endsWith('abc', 'b')).toBe(false);
    expect(endsWith('abc', 'a')).toBe(false);
    expect(endsWith('abc', 'ab')).toBe(false);
    expect(endsWith('abc', 'bc')).toBe(true);
    expect(endsWith('abc', 'abc')).toBe(true);
    expect(endsWith('abc', 'bcd')).toBe(false);
    expect(endsWith('abc', 'abcd')).toBe(false);
    expect(endsWith('abc', 'bcde')).toBe(false);
  });

  it('e', function() {
    expect.assertions(11);
    expect(endsWith('abc', '', undefined)).toBe(true);
    expect(endsWith('abc', '\0', undefined)).toBe(false);
    expect(endsWith('abc', 'c', undefined)).toBe(true);
    expect(endsWith('abc', 'b', undefined)).toBe(false);
    expect(endsWith('abc', 'a', undefined)).toBe(false);
    expect(endsWith('abc', 'ab', undefined)).toBe(false);
    expect(endsWith('abc', 'bc', undefined)).toBe(true);
    expect(endsWith('abc', 'abc', undefined)).toBe(true);
    expect(endsWith('abc', 'bcd', undefined)).toBe(false);
    expect(endsWith('abc', 'abcd', undefined)).toBe(false);
    expect(endsWith('abc', 'bcde', undefined)).toBe(false);
  });

  it('f', function() {
    expect.assertions(11);
    expect(endsWith('abc', '', null)).toBe(true);
    expect(endsWith('abc', '\0', null)).toBe(false);
    expect(endsWith('abc', 'c', null)).toBe(false);
    expect(endsWith('abc', 'b', null)).toBe(false);
    expect(endsWith('abc', 'a', null)).toBe(false);
    expect(endsWith('abc', 'ab', null)).toBe(false);
    expect(endsWith('abc', 'bc', null)).toBe(false);
    expect(endsWith('abc', 'abc', null)).toBe(false);
    expect(endsWith('abc', 'bcd', null)).toBe(false);
    expect(endsWith('abc', 'abcd', null)).toBe(false);
    expect(endsWith('abc', 'bcde', null)).toBe(false);
  });

  it('g', function() {
    expect.assertions(11);
    expect(endsWith('abc', '', -Infinity)).toBe(true);
    expect(endsWith('abc', '\0', -Infinity)).toBe(false);
    expect(endsWith('abc', 'c', -Infinity)).toBe(false);
    expect(endsWith('abc', 'b', -Infinity)).toBe(false);
    expect(endsWith('abc', 'a', -Infinity)).toBe(false);
    expect(endsWith('abc', 'ab', -Infinity)).toBe(false);
    expect(endsWith('abc', 'bc', -Infinity)).toBe(false);
    expect(endsWith('abc', 'abc', -Infinity)).toBe(false);
    expect(endsWith('abc', 'bcd', -Infinity)).toBe(false);
    expect(endsWith('abc', 'abcd', -Infinity)).toBe(false);
    expect(endsWith('abc', 'bcde', -Infinity)).toBe(false);
  });

  it('h', function() {
    expect.assertions(11);
    expect(endsWith('abc', '', -1)).toBe(true);
    expect(endsWith('abc', '\0', -1)).toBe(false);
    expect(endsWith('abc', 'c', -1)).toBe(false);
    expect(endsWith('abc', 'b', -1)).toBe(false);
    expect(endsWith('abc', 'a', -1)).toBe(false);
    expect(endsWith('abc', 'ab', -1)).toBe(false);
    expect(endsWith('abc', 'bc', -1)).toBe(false);
    expect(endsWith('abc', 'abc', -1)).toBe(false);
    expect(endsWith('abc', 'bcd', -1)).toBe(false);
    expect(endsWith('abc', 'abcd', -1)).toBe(false);
    expect(endsWith('abc', 'bcde', -1)).toBe(false);
  });

  it('i', function() {
    expect.assertions(11);
    expect(endsWith('abc', '', -0)).toBe(true);
    expect(endsWith('abc', '\0', -0)).toBe(false);
    expect(endsWith('abc', 'c', -0)).toBe(false);
    expect(endsWith('abc', 'b', -0)).toBe(false);
    expect(endsWith('abc', 'a', -0)).toBe(false);
    expect(endsWith('abc', 'ab', -0)).toBe(false);
    expect(endsWith('abc', 'bc', -0)).toBe(false);
    expect(endsWith('abc', 'abc', -0)).toBe(false);
    expect(endsWith('abc', 'bcd', -0)).toBe(false);
    expect(endsWith('abc', 'abcd', -0)).toBe(false);
    expect(endsWith('abc', 'bcde', -0)).toBe(false);
  });

  it('j', function() {
    expect.assertions(11);
    expect(endsWith('abc', '', +0)).toBe(true);
    expect(endsWith('abc', '\0', +0)).toBe(false);
    expect(endsWith('abc', 'c', +0)).toBe(false);
    expect(endsWith('abc', 'b', +0)).toBe(false);
    expect(endsWith('abc', 'a', +0)).toBe(false);
    expect(endsWith('abc', 'ab', +0)).toBe(false);
    expect(endsWith('abc', 'bc', +0)).toBe(false);
    expect(endsWith('abc', 'abc', +0)).toBe(false);
    expect(endsWith('abc', 'bcd', +0)).toBe(false);
    expect(endsWith('abc', 'abcd', +0)).toBe(false);
    expect(endsWith('abc', 'bcde', +0)).toBe(false);
  });

  it('k', function() {
    expect.assertions(11);
    expect(endsWith('abc', '', 1)).toBe(true);
    expect(endsWith('abc', '\0', 1)).toBe(false);
    expect(endsWith('abc', 'c', 1)).toBe(false);
    expect(endsWith('abc', 'b', 1)).toBe(false);
    expect(endsWith('abc', 'a', 1)).toBe(true);
    expect(endsWith('abc', 'ab', 1)).toBe(false);
    expect(endsWith('abc', 'bc', 1)).toBe(false);
    expect(endsWith('abc', 'abc', 1)).toBe(false);
    expect(endsWith('abc', 'bcd', 1)).toBe(false);
    expect(endsWith('abc', 'abcd', 1)).toBe(false);
    expect(endsWith('abc', 'bcde', 1)).toBe(false);
  });

  it('l', function() {
    expect.assertions(11);
    expect(endsWith('abc', '', 2)).toBe(true);
    expect(endsWith('abc', '\0', 2)).toBe(false);
    expect(endsWith('abc', 'c', 2)).toBe(false);
    expect(endsWith('abc', 'b', 2)).toBe(true);
    expect(endsWith('abc', 'a', 2)).toBe(false);
    expect(endsWith('abc', 'ab', 2)).toBe(true);
    expect(endsWith('abc', 'bc', 2)).toBe(false);
    expect(endsWith('abc', 'abc', 2)).toBe(false);
    expect(endsWith('abc', 'bcd', 2)).toBe(false);
    expect(endsWith('abc', 'abcd', 2)).toBe(false);
    expect(endsWith('abc', 'bcde', 2)).toBe(false);
  });

  it('m', function() {
    expect.assertions(11);
    expect(endsWith('abc', '', +Infinity)).toBe(true);
    expect(endsWith('abc', '\0', +Infinity)).toBe(false);
    expect(endsWith('abc', 'c', +Infinity)).toBe(true);
    expect(endsWith('abc', 'b', +Infinity)).toBe(false);
    expect(endsWith('abc', 'a', +Infinity)).toBe(false);
    expect(endsWith('abc', 'ab', +Infinity)).toBe(false);
    expect(endsWith('abc', 'bc', +Infinity)).toBe(true);
    expect(endsWith('abc', 'abc', +Infinity)).toBe(true);
    expect(endsWith('abc', 'bcd', +Infinity)).toBe(false);
    expect(endsWith('abc', 'abcd', +Infinity)).toBe(false);
    expect(endsWith('abc', 'bcde', +Infinity)).toBe(false);
  });

  it('n', function() {
    expect.assertions(11);
    expect(endsWith('abc', '')).toBe(true);
    expect(endsWith('abc', '\0')).toBe(false);
    expect(endsWith('abc', 'c')).toBe(true);
    expect(endsWith('abc', 'b')).toBe(false);
    expect(endsWith('abc', 'a')).toBe(false);
    expect(endsWith('abc', 'ab')).toBe(false);
    expect(endsWith('abc', 'bc')).toBe(true);
    expect(endsWith('abc', 'abc')).toBe(true);
    expect(endsWith('abc', 'bcd')).toBe(false);
    expect(endsWith('abc', 'abcd')).toBe(false);
    expect(endsWith('abc', 'bcde')).toBe(false);
  });

  it('o', function() {
    expect.assertions(11);
    expect(endsWith('abc', '', 'x')).toBe(true);
    expect(endsWith('abc', '\0', 'x')).toBe(false);
    expect(endsWith('abc', 'c', 'x')).toBe(false);
    expect(endsWith('abc', 'b', 'x')).toBe(false);
    expect(endsWith('abc', 'a', 'x')).toBe(false);
    expect(endsWith('abc', 'ab', 'x')).toBe(false);
    expect(endsWith('abc', 'bc', 'x')).toBe(false);
    expect(endsWith('abc', 'abc', 'x')).toBe(false);
    expect(endsWith('abc', 'bcd', 'x')).toBe(false);
    expect(endsWith('abc', 'abcd', 'x')).toBe(false);
    expect(endsWith('abc', 'bcde', 'x')).toBe(false);
  });

  it('p', function() {
    expect.assertions(5);
    expect('[a-z]+(bar)?'.endsWith('(bar)?')).toBe(true);
    expect(function() {
      '[a-z]+(bar)?'.endsWith(/(bar)?/);
    }).toThrowErrorMatchingSnapshot();
    expect('[a-z]+(bar)?'.endsWith('[a-z]+', 6)).toBe(true);
    expect(function() {
      '[a-z]+(bar)?'.endsWith(/(bar)?/);
    }).toThrowErrorMatchingSnapshot();
    expect(function() {
      '[a-z]+/(bar)?/'.endsWith(/(bar)?/);
    }).toThrowErrorMatchingSnapshot();
  });

  it('q', function() {
    expect.assertions(11);
    // https://mathiasbynens.be/notes/javascript-unicode#poo-test
    const string = 'I\xF1t\xEBrn\xE2ti\xF4n\xE0liz\xE6ti\xF8n\u2603\uD83D\uDCA9';
    expect(string.endsWith('')).toBe(true);
    expect(string.endsWith('\xF1t\xEBr')).toBe(false);
    expect(string.endsWith('\xF1t\xEBr', 5)).toBe(true);
    expect(string.endsWith('\xE0liz\xE6')).toBe(false);
    expect(string.endsWith('\xE0liz\xE6', 16)).toBe(true);
    expect(string.endsWith('\xF8n\u2603\uD83D\uDCA9')).toBe(true);
    expect(string.endsWith('\xF8n\u2603\uD83D\uDCA9', 23)).toBe(true);
    expect(string.endsWith('\u2603')).toBe(false);
    expect(string.endsWith('\u2603', 21)).toBe(true);
    expect(string.endsWith('\uD83D\uDCA9')).toBe(true);
    expect(string.endsWith('\uD83D\uDCA9', 23)).toBe(true);
  });

  it('r', function() {
    expect.assertions(6);
    expect(function() {
      endsWith(undefined);
    }).toThrowErrorMatchingSnapshot();
    expect(function() {
      endsWith(undefined, 'b');
    }).toThrowErrorMatchingSnapshot();
    expect(function() {
      endsWith(undefined, 'b', 4);
    }).toThrowErrorMatchingSnapshot();
    expect(function() {
      endsWith(null);
    }).toThrowErrorMatchingSnapshot();
    expect(function() {
      endsWith(null, 'b');
    }).toThrowErrorMatchingSnapshot();
    expect(function() {
      endsWith(null, 'b', 4);
    }).toThrowErrorMatchingSnapshot();
  });

  it('s', function() {
    expect.assertions(5);
    expect(endsWith(42, '2')).toBe(true);
    expect(endsWith(42, '4')).toBe(false);
    expect(endsWith(42, 'b', 4)).toBe(false);
    expect(endsWith(42, '2', 1)).toBe(false);
    expect(endsWith(42, '2', 4)).toBe(true);
  });

  it('t', function() {
    expect.assertions(3);
    expect(
      endsWith(
        {
          toString() {
            return 'abc';
          },
        },
        'b',
        0,
      ),
    ).toBe(false);
    expect(
      endsWith(
        {
          toString() {
            return 'abc';
          },
        },
        'b',
        1,
      ),
    ).toBe(false);
    expect(
      endsWith(
        {
          toString() {
            return 'abc';
          },
        },
        'b',
        2,
      ),
    ).toBe(true);
  });

  it('u', function() {
    expect.assertions(2);
    expect(function() {
      endsWith(
        {
          toString() {
            throw new RangeError();
          },
        },
        /./,
      );
    }).toThrowErrorMatchingSnapshot();
    expect(function() {
      endsWith(
        {
          toString() {
            return 'abc';
          },
        },
        /./,
      );
    }).toThrowErrorMatchingSnapshot();
  });

  it('v', function() {
    expect.assertions(6);
    expect(function() {
      endsWith(undefined);
    }).toThrowErrorMatchingSnapshot();
    expect(function() {
      endsWith(undefined, 'b');
    }).toThrowErrorMatchingSnapshot();
    expect(function() {
      endsWith(undefined, 'b', 4);
    }).toThrowErrorMatchingSnapshot();
    expect(function() {
      endsWith(null);
    }).toThrowErrorMatchingSnapshot();
    expect(function() {
      endsWith(null, 'b');
    }).toThrowErrorMatchingSnapshot();
    expect(function() {
      endsWith(null, 'b', 4);
    }).toThrowErrorMatchingSnapshot();
  });

  it('w', function() {
    expect.assertions(5);
    expect(endsWith(42, '2')).toBe(true);
    expect(endsWith(42, '4')).toBe(false);
    expect(endsWith(42, 'b', 4)).toBe(false);
    expect(endsWith(42, '2', 1)).toBe(false);
    expect(endsWith(42, '2', 4)).toBe(true);
  });

  it('x', function() {
    expect.assertions(3);
    expect(
      endsWith(
        {
          toString() {
            return 'abc';
          },
        },
        'b',
        0,
      ),
    ).toBe(false);
    expect(
      endsWith(
        {
          toString() {
            return 'abc';
          },
        },
        'b',
        1,
      ),
    ).toBe(false);
    expect(
      endsWith(
        {
          toString() {
            return 'abc';
          },
        },
        'b',
        2,
      ),
    ).toBe(true);
  });

  it('y', function() {
    expect.assertions(2);
    expect(function() {
      endsWith(
        {
          toString() {
            throw new RangeError();
          },
        },
        /./,
      );
    }).toThrowErrorMatchingSnapshot();
    expect(function() {
      endsWith(
        {
          toString() {
            return 'abc';
          },
        },
        /./,
      );
    }).toThrowErrorMatchingSnapshot();
  });
});
