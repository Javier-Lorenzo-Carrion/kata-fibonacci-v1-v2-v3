import { fibonacciV1 } from '../core/fibonacci';

describe('Fibonacci version 1 should', () => {
  it('return 0 for case 0 ', () => {
    expect(fibonacciV1(0)).toBe(0);
  });
});
