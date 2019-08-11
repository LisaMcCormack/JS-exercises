// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return  str.split('').every((e, i) => {
    return e === str[str.length -i -1]
  })
}

// the solution commented out below is better because calling every
// is doing more work than needs to be done


module.exports = palindrome;


// function palindrome(str) {
//   pal = str.split("").reduce((rev, char) => char + rev, '');
//   return pal === str
// }
