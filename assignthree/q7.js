
/*const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];
Output = [
{ name: "Ram", average: 70 },
{ name: "Mohan", average: 80 },
{ name: "Sai", average: 70 },
{ name: "Hemang", average: 85 },
];
Use array.map and array.reduce*/


const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
  ];
  
  const studentAverages = students.map(student => {
    // Calculate the sum of scores using reduce
    const sum = student.scores.reduce((accumulator, score) => accumulator + score, 0);
    // Calculate the average score
    const average = sum / student.scores.length;
  
    // Return an object with the student's name and average score
    return { name: student.name, average: average };
  });
  
  console.log(studentAverages);
  // Output: 
  // [
  //   { name: "Ram", average: 70 },
  //   { name: "Mohan", average: 80 },
  //   { name: "Sai", average: 70 },
  //   { name: "Hemang", average: 85 }
  // ]
  