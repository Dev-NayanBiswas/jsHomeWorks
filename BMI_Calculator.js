/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/

var height =5.10;
var weight =70;
let heightIntoMeter = height * 0.3048;
let BMI = weight/(heightIntoMeter ** 2);

if(BMI < 18.5){
    return console.log("You are underweight");
}
else if(BMI >= 18.5 && BMI <= 24.9){
    return console.log("You are Normal");
}
else if(BMI >= 25 && BMI <=29.9){
    return console.log("you are overweight");
}
else{
    return console.log("you are obese");
}


console.log(BMI);