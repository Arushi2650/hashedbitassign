/*Write a function to replace wrong word with correct word in any sentance.
Like this - correctfn(string, wrong, correct)
Use string.replace in function.*/


function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
  }
  
  let string = " my collge";
  let wrong = "collge";
  let correct = "collage";
  
  let correctedSentence = correctfn(string, wrong, correct);
  console.log(correctedSentence); // Output: "I love my country."
  