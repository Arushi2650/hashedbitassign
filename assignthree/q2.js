/* let str = 'I love my India'
output expected = 'India my love I'
Write code for this*/

let str = 'I love my India';
let reversedStr = str.split(' ').reverse().join(' ');
console.log(reversedStr); // Output: 'India my love I'
