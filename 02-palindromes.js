let myString = "abba";
function palindrome(myString) {
  let reversal = myString.split("").reverse().join("");
  return myString === reversal;
}

// Call the function and store the result
let isPalindrome = palindrome(myString);
console.log(isPalindrome);
//Result - true
