// A Fibonacci sequence is an ordering of numbers where each number is the sum of the preceding two.
// For example, the first ten numbers of the Fibonacci sequence are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
// write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as argument to the function.
// fibonacci(3)  // --> 2

const fibonacci = num => {
  // if num is either 0 or 1 return num
  if(num < 2) {
    return num
  }
  // recursion here
  return fibonacci(num - 1) + fibonacci(num - 2)
};

const fibonacciIter = num => {
  if(num === 0) {
    return 0;
  } if (num === 1) {
    return 1;
  } else {
    let prevNum = 0;
    let nextNum = 1;
    let result;
    for (let i=2; i<=num; i++ ) {
      result = prevNum + nextNum;
       prevNum = nextNum;
       nextNum = result;
      }
    return result;
  }
}

console.log(fibonacci(7));
console.log(fibonacciIter(7));
console.log(fibonacci(3));
console.log(fibonacciIter(3));
