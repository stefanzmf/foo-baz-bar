export const substractTwo = (a, b) => a - b;
export const substractThree = (a, b, c) => a - b - c;

export default (numbers) => numbers.reduce((sum, x) => sum - x);