export const addTwo = (a, b) => a + b;
export const addThree = (a, b, c) => a + b + c;

export default (numbers) => numbers.reduce((sum, x) => sum + x);