/*Create an array of states in india.
Remove all the names starting with vowels from the list. Use array.filter.*/


//  Enter array of states in India
const statesInIndia = [
    "Andhra Pradesh","Arunachal Pradesh","Assam",
    "Bihar","Chhattisgarh","Goa","Gujarat",
    "Haryana", "Himachal Pradesh","Jharkhand",
    "Karnataka","Kerala","Madhya Pradesh",
    "Maharashtra","Manipur","Meghalaya",
    "Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim",
    "Tamil Nadu","Telangana","Tripura","Uttar Pradesh",
    "Uttarakhand","West Bengal"
];

// Function to check if a state name starts with a vowel
const startsWithVowel = (state) => /^[aeiou]/i.test(state);

// Filter out states that start with a vowel
const filteredStates = statesInIndia.filter(state => !startsWithVowel(state));

console.log(filteredStates);
