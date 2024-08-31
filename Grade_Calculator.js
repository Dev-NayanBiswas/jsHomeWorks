/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let number = 90;
 let grade = (number >= 90 && number<= 100 && "you got A grade") || (number >=80 && number<=89 && "you got B grade") || (number >=70 && number<=79 && "you got C grade") || (number >=60 && number <=69 && "you got D grade") || (number >=0 && number <= 59 && "you got F grade")
console.log(grade);