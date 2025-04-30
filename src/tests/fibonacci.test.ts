import { fibonacciV1, fibonacciV2 } from '../core/fibonacci';

describe('Fibonacci version 1 should', () => {
  it('return 0 for case 0 ', () => {
    expect(fibonacciV1(0)).toBe(0);
  });
  it('return 1 for case 1 ', () => {
    expect(fibonacciV1(1)).toBe(1);
  });
  it('return 1 for case 2 ', () => {
    expect(fibonacciV1(2)).toBe(1);
  });
  it('return 1 for case 3 ', () => {
    expect(fibonacciV1(3)).toBe(2);
  });
  it('return 3 for case 4 ', () => {
    expect(fibonacciV1(4)).toBe(3);
  });
  it('return 5 for case 5 ', () => {
    expect(fibonacciV1(5)).toBe(5);
  });
  it('return 8 for case 6 ', () => {
    expect(fibonacciV1(6)).toBe(8);
  });
});

describe('Fibonacci version 2 should', () => {
  it('return 0 for case 0 ', () => {
    expect(fibonacciV2(0)).toBe(0);
  });
  it('return 1 for case 1 ', () => {
    expect(fibonacciV2(1)).toBe(1);
  });
});
