/*Take any string with minimum 20 characters.
 Count number of consonant and vowel in the string.*/


 let str = "This is a sample sentence with more than twenty characters!";
let vowels = "AEIOUaeiou";
let consonants = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz";

let vowelCount = 0;
let consonantCount = 0;

for (let char of str) {
  if (vowels.includes(char)) {
    vowelCount++;
  } else if (consonants.includes(char)) {
    consonantCount++;
  }
}

console.log(`Vowels: ${vowelCount}`);
console.log(`Consonants: ${consonantCount}`);
