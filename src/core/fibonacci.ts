export function fibonacciV1(number: number): number {
  if (number <= 1) return number;
  const fibonacciSecuence: number[] = new Array(number);

  fibonacciSecuence[0] = 0;
  fibonacciSecuence[1] = 1;

  for (let index: number = 2; index <= number; ++index) {
    fibonacciSecuence[index] = fibonacciSecuence[index - 1] + fibonacciSecuence[index - 2];
  }

  return fibonacciSecuence[number];
}

export function fibonacciV2(number: number): number {
  if (number <= 1) return number;
  return fibonacciV2(number - 1) + fibonacciV2(number - 2);
}

export function fibonacciV3(number: number) {
  const fibonacciSequence: number[] = [0, 1];
  while (fibonacciSequence.length <= number) {
    const sumatoryOfTwoPreviousValues: number = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2];
    fibonacciSequence.push(sumatoryOfTwoPreviousValues);
  }
  return fibonacciSequence[number];
}
