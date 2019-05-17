const assert = require('assert');
const formatDate = require('./formatDate.js');

describe('formatDate', () => {
  it('should work for days, hours, minutes and second', () => {
    const actual = formatDate('654321');

    const expected = '7d 13h 45m 21s';

    assert.equal(actual, expected);
  });

  it('should work for days, hours, minutes', () => {
    const actual = formatDate('651720');

    const expected = '7d 13h 2m';

    assert.equal(actual, expected);
  });

  it('should work for days and hours', () => {
    const actual = formatDate('651600');

    const expected = '7d 13h';

    assert.equal(actual, expected);
  });

  it('should work for days', () => {
    const actual = formatDate('604800');

    const expected = '7d';

    assert.equal(actual, expected);
  });

  it('should work for hours', () => {
    const actual = formatDate('46800');

    const expected = '13h';

    assert.equal(actual, expected);
  });

  it('should work for minutes', () => {
    const actual = formatDate('120');

    const expected = '2m';

    assert.equal(actual, expected);
  });

  it('should work for seconds', () => {
    const actual = formatDate('20');

    const expected = '20s';

    assert.equal(actual, expected);
  });

  it('should return 0 seconds if no value is passed', () => {
    const actual = formatDate();

    const expected = '0s';

    assert.equal(actual, expected);
  });

});
