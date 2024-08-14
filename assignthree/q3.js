/*let string = 'INDIA'
output = 'INDONESIA'
Use array.splice
*/


let string = 'INDIA';
// Convert to array of characters
let charArray = string.split(''); 

// Replace 'DIA' with 'ONESIA'
charArray.splice(2, 3, 'O', 'N', 'E', 'S', 'I', 'A');

let newString = charArray.join(''); // Join back to a string
console.log(newString);
