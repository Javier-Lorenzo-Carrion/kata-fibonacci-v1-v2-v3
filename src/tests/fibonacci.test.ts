import { fibonacciV1 } from '../core/fibonacci';

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
});
