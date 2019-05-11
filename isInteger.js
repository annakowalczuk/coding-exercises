// write a function isInteger(x) that determines if x is an integer.

function isInteger(x) {
  return Math.round(x) === x ? console.log(x + ' is integer') : console.log(x + ' is not integer');
}

isInteger(2.2);
isInteger(11);


//easier solution: Number.isInteger(value)
