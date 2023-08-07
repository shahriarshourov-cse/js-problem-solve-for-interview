//Reversal string DS
function reversal(newString) {
  const arr = newString.split("").reverse(); // I have Splited  the string into an array of characters and then reverse the array
  return arr.join(""); // Join the array back into a string
}

const reversedString = reversal("Shourov"); // Call the function with the input string "hi"
console.log(reversedString); // Print the reversed string to the console

//Another Method -> For
let myString = "Bangladesh";
reverse = (str) => {
  let backward = [];
  for (let i = str.length - 1; i >= 0; i--) {
    backward.push(str[i]);
  }
  return backward;
};
let result = reverse(myString);
console.log(result);
