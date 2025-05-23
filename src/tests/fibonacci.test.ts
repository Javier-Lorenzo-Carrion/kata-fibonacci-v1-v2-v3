import { fibonacciV1, fibonacciV2, fibonacciV3 } from '../core/fibonacci';

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
  it('return 1 for case 2 ', () => {
    expect(fibonacciV2(2)).toBe(1);
  });
  it('return 8 for case 6 ', () => {
    expect(fibonacciV1(6)).toBe(8);
  });
});

describe('Fibonacci version 3 should', () => {
  it('return 0 for case 0 ', () => {
    expect(fibonacciV3(0)).toBe(0);
  });
  it('return 1 for case 1 ', () => {
    expect(fibonacciV3(1)).toBe(1);
  });
  it('return 1 for case 2 ', () => {
    expect(fibonacciV3(2)).toBe(1);
  });
  it('return 8 for case 6 ', () => {
    expect(fibonacciV3(6)).toBe(8);
  });
});
