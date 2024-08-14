/*Write a function to reverse a string.
Input - Hello
Outpur - olleH*/

function reverseString(str) {
    // Split the string into an array of characters
    let charArray = str.split('');
  
    // Reverse the array of characters
    let reversedArray = charArray.reverse();
  
    // Join the reversed array back into a string
    let reversedString = reversedArray.join('');
  
    return reversedString;
  }
  
  const input = "Hello";
  const output = reverseString(input);
  console.log(output); // Output: "olleH"
  