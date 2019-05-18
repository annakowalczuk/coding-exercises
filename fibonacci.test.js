const assert = require('assert');
const fibonacci = require('./fibonacci');

describe('Fibbonacci functions', () => {
  describe('fibonacciRec', () => {
    it('should return 2 when 3 is passed', () => {
      const actual = fibonacci.fibonacciRec(3);
      const expected = 2;

      assert.equal(actual, expected);
    });

    it('should return 13 when 7 is passed', () => {
      const actual = fibonacci.fibonacciRec(7);
      const expected = 13;

      assert.equal(actual, expected);
    });

    it('should return 0 when 0 is passed', () => {
      const actual = fibonacci.fibonacciRec(0);
      const expected = 0;

      assert.equal(actual, expected);
    });

    it('should return 1 when 1 is passed', () => {
      const actual = fibonacci.fibonacciRec(0);
      const expected = 0;

      assert.equal(actual, expected);
    });

  });

  describe('fibonacciIter', () => {
    it('should return 2 when 3 is passed', () => {
      const actual = fibonacci.fibonacciIter(3);
      const expected = 2;

      assert.equal(actual, expected);
    });

    it('should return 13 when 7 is passed', () => {
      const actual = fibonacci.fibonacciIter(7);
      const expected = 13;

      assert.equal(actual, expected);
    });

    it('should return 0 when 0 is passed', () => {
      const actual = fibonacci.fibonacciIter(0);
      const expected = 0;

      assert.equal(actual, expected);
    });

    it('should return 1 when 1 is passed', () => {
      const actual = fibonacci.fibonacciIter(0);
      const expected = 0;

      assert.equal(actual, expected);
    });
  });
});
