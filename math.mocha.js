const assert = require('assert');
const { add, subtract, multiply, divide, factorial, isPrime } = require('./math');

describe('math', () => {
  it('add', () => {
    assert.strictEqual(add(2, 3), 5);
    assert.strictEqual(add(-1, 1), 0);
  });

  it('subtract', () => {
    assert.strictEqual(subtract(5, 3), 2);
    assert.strictEqual(subtract(0, 5), -5);
  });

  it('multiply', () => {
    assert.strictEqual(multiply(3, 4), 12);
    assert.strictEqual(multiply(0, 100), 0);
  });

  it('divide', () => {
    assert.strictEqual(divide(10, 2), 5);
    assert.throws(() => divide(1, 0), /division by zero/);
  });

  it('factorial', () => {
    assert.strictEqual(factorial(0), 1);
    assert.strictEqual(factorial(5), 120);
    assert.throws(() => factorial(-1), /negative input/);
  });

  it('isPrime', () => {
    assert.strictEqual(isPrime(1), false);
    assert.strictEqual(isPrime(2), true);
    assert.strictEqual(isPrime(17), true);
  });
});
