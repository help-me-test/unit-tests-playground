const { test, expect } = require('vitest');
const { add, subtract, multiply, divide, factorial, isPrime } = require('./math');

test('add', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
});

test('subtract', () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(0, 5)).toBe(-5);
});

test('multiply', () => {
  expect(multiply(3, 4)).toBe(12);
  expect(multiply(0, 100)).toBe(0);
});

test('divide', () => {
  expect(divide(10, 2)).toBe(5);
  expect(() => divide(1, 0)).toThrow('division by zero');
});

test('factorial', () => {
  expect(factorial(0)).toBe(1);
  expect(factorial(5)).toBe(120);
  expect(() => factorial(-1)).toThrow('negative input');
});

test('isPrime', () => {
  expect(isPrime(1)).toBe(false);
  expect(isPrime(2)).toBe(true);
  expect(isPrime(17)).toBe(true);
});
