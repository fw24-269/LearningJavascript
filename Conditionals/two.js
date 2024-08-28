let num1 = 25;
let num2 = 42;
let num3 = 18;

// Use an if-else-if ladder to find the largest number
if (num1 >= num2 && num1 >= num3) {
    console.log("The largest number is: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("The largest number is: " + num2);
} else {
    console.log("The largest number is: " + num3);
}