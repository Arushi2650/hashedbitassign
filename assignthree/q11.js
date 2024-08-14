/*Input

[
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
]
    
Output: -
[
    student1: {
        average: 44
    },
    student2: {
        average: 44
    },
    student3: {
        average: 44
    }
]
Write code to find average as mentioned above. Use array and object methods.*/

// Define the input data
const studentsData = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

// Function to calculate average scores
function calculateAverages(students) {
    return Object.keys(students).map(student => {
        // Get the scores for the current student
        const scores = Object.values(students[student]);
        
        // Calculate the average score
        const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        
        // Return a new object with the student's name and average score
        return {
            [student]: {
                average: average
            }
        };
    });
}

const averageScores = calculateAverages(studentsData);
console.log(averageScores);
/*
Output:
[
    { student1: { average: 64.2 } },
    { student2: { average: 64.2 } },
    { student3: { average: 64.2 } }
]
*/
