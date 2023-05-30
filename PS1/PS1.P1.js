// Problem Set 1
// Problem 1 (PS1.P1.js)
// Write a function that takes a string as its input and returns a new string that contains all of the
// letters in the original string, but in reverse alphabetical order. Ignore punctuation and numbers.
// Duplicates are fine, so 'exioi' -> 'xoiie'. Test your function using the string
// ‘supercalifragilisticexpialidocious’.

const reverseAlphaOrder = str => {
    return str
      .split('')
      .filter(char => /[a-z]/i.test(char))
      .sort()
      .reverse()
      .join('');
  };
  
  console.log(`Reversed alphabetical order string is: ${reverseAlphaOrder('supercalifragilisticexpialidocious')}`);
  