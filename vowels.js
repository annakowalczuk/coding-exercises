'use strict';
// write a function that takes a string as argument and returns the number of vowels contained in that string.
// The vowels are a, e, i, o, u, y.

const re = /[aeiouy]/g;

const findVowels = str => {
  const matched = str.match(/[aeiouy]/gi);
  return console.log(str + ': ' + (matched ? matched.length : 0));
};

findVowels('hello');
findVowels('why');
findVowels('grr');
