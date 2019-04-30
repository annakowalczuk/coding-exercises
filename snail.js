/*Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

The 0x0 (empty matrix) is represented as [[]]*/


snail = function (array) {
  let result = [];

  if (!array[0].length) {
    return result;
  } else {
    for (let j = 0; j < (Math.ceil(array.length / 2)); j++) {
      //go right
      result = result.concat(array[0 + j].slice(j, array.length - j));

      //go down
      for (let i = 1 + j; i <= (array.length - 2 - j); i++) {
        result.push(array[i][array.length - 1 - j]);
      };

      //go left
      if (j < array.length - j - 1) {
        result = result.concat(array[array.length - 1 - j].slice(j, array.length - j).reverse());
      };

      //go up
      for (let i = array.length - 2 - j; i > j; i--) {
        result.push(array[i][0 + j]);
      }
    };
  }
  return result;
}

console.log(snail([
  []
])); //[]
console.log(snail([
  [1]
])); //[1]
console.log(snail([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])); // [1, 2, 3, 6, 9, 8, 7, 4, 5])
console.log(snail([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
])); // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13])
