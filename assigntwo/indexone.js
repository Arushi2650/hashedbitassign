/*Write a function to calculate which can add, subtract,
 multiply and divide two numbers. Use switch inside function.*/


function calculate(num1, num2, operation) {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
    }
    return result;
}

// Example usage:
console.log(calculate(20, 15, 'add'));        // Output: 15
console.log(calculate(20, 15, 'subtract'));   // Output: 5
console.log(calculate(20, 15, 'multiply'));   // Output: 50
console.log(calculate(20, 15, 'divide'));     // Output: 2
console.log(calculate(20, 5, 'power'));      // Output: Invalid operation
