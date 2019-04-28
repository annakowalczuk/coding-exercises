// write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter
// anagram('finder', 'Friend') --> true
// anagram('hello', 'bye') --> false

const transform = str => {
  return str.replace(/[^\w]/g).toLowerCase().split('').sort().join('');
};

const anagram = (firstStr, secondStr) => {
  return transform(firstStr) === transform(secondStr);
};

console.log(anagram('finder', 'Friend'));
console.log(anagram('hello', 'bye'));
