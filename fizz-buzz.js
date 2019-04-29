/*
Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.

For example, solution(20) should return [5, 2, 1]
*/

const solution = (number) => {
  const checkMultiples = (operand) =>
  Math.floor((number % operand === 0) ? ((number - 1) / operand) : (number / operand));
  let a = checkMultiples(3);
  let b = checkMultiples(5);
  let c = checkMultiples(15);
  return [a >= 5 ? a - c : a, b >= 3 ? b - c : b, c];
}
console.log(solution(20));
