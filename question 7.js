function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  console.log(isPalindrome('racecar')); 
  console.log(isPalindrome('hello'));