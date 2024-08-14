/* Write a function to find repeated sum of digits until there is only a single 
digit in the number.
Example - 456 - 4+5+6 = 15 - 1+5 = 6.*/

function repeatedDigitSum(num) {
    // While the number has more than one digit
    while (num >= 10) {
      num = num.toString() // Convert the number to a string
                  .split('') // Split the string into individual digits
                  .reduce((sum, digit) => sum + parseInt(digit), 0); // Sum the digits
    }
    return num;
  }
  
  const number = 456;
  const result = repeatedDigitSum(number);
  console.log(result); // Output: 6
  