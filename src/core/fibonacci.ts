export function fibonacciV1(number: number): number {
  if (number <= 1) return number;
  const fibonaccNumberUntilnumber: number[] = [0, 1];
  for (let i: number = 2; i <= number; ++i) {
    fibonaccNumberUntilnumber.push(fibonaccNumberUntilnumber[i - 1] + fibonaccNumberUntilnumber[i - 2]);
  }
  return fibonaccNumberUntilnumber[number];
}