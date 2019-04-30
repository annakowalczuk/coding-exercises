const palindrome = (isPalindrome) => {
  // palindrome('racecar')  ===  true palindrome('table')  ===  false

  isPalindrome = isPalindrome.toLowerCase().split('');
  let newWord = [];
  for (let i = isPalindrome.length - 1; i >= 0; i--) {
      newWord.push(isPalindrome[i]);
  }

  return console.log(isPalindrome.join('') === newWord.join(''));
};

palindrome('racecar');
palindrome('table');
