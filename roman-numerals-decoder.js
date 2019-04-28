/*Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Courtesy of rosettacode.org*/

function solution(roman) {
  // complete the solution by transforming the 
  // string roman numeral into an integer  
  const decoder = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let result = 0;
  roman.split('').forEach((element, index, array) => {
    if ((array.length > 1) && (decoder[element] < decoder[array[index + 1]])) {
      result = result + decoder[array[index + 1]] - decoder[element];
      array.splice(index + 1, 1);
    } else {
      result = result + decoder[element];
    }
  });
  return result;
}


console.log(solution('IV')); //4
console.log(solution('XXVII')); //27
console.log(solution('CMVIII')); //908
