export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
export function multiply(a, b) { return a * b; }
export function divide(a, b) {
  if (b === 0) throw new Error('division by zero');
  return a / b;
}
export function factorial(n) {
  if (n < 0) throw new Error('negative input');
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
export function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0) return false;
  return true;
}
