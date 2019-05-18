const assert = require('assert');
const anagram = require('./anagram');

describe('anagram', () => {
  it('pass test', () => {
    const expected = anagram('finder', 'Friend');
    assert.ok(expected);
  });

  it('pass test', () => {
    const expected = anagram('hello', 'olleh');
    assert.ok(expected);
  });

  it('pass test', () => {
    const expected = anagram('hello', 'bye');
    assert.ok(!expected);
  });
});
