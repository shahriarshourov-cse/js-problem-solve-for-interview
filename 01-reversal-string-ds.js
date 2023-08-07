//Reversal string DS
function reversal(newString) {
  const arr = newString.split("").reverse(); // Split the string into an array of characters and then reverse the array
  return arr.join(""); // Join the array back into a string
}

const reversedString = reversal("Shourov"); // Call the function with the input string "hi"
console.log(reversedString); // Print the reversed string to the console
