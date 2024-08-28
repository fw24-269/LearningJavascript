let maxNumber = numbers[0];

// Loop through each element in the array
for (let i = 1; i < numbers.length; i++) {
    // If the current element is greater than maxNumber, update maxNumber
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}

// Print the result
console.log("The maximum element in the array is:", maxNumber);