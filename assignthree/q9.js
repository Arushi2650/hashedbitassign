// Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    // Trim any leading or trailing whitespace
    paragraph = paragraph.trim();
  
    // Split the paragraph into words using a regular expression
    // \s+ matches one or more whitespace characters
    const words = paragraph.split(/\s+/);
  
    // Return the number of words
    return words.length;
  }
  
  const paragraph = "This is a sample paragraph with several words. Let's count them!";
  const wordCount = countWords(paragraph);
  console.log(`Number of words: ${wordCount}`); // Output: Number of words: 11
  
