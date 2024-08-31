// !Task-01
let myTaka = 1000;
let applePerKG = 400;
let orangePerKG = 300;

let returnMoney = myTaka - (applePerKG+orangePerKG);

// console.log(returnMoney);

// !Task-02
let mathematics = 75.25;
let biology = 65;
let chemistry =80;
let physics =35.45;
let bangla =99.50;

let totalSubjects = 5;
let totalMarks = mathematics + biology + chemistry + physics + bangla;
let avgMark = (totalMarks / totalSubjects).toFixed(2);

// console.log(totalMarks,avgMark);

// ! Task-03

let givenValue = 119;
let remainder = givenValue % 5;

// console.log(remainder);

//? Task-04 
let a = isNaN("11");
let b = isNaN(2-10);
console.log(a,b);
console.clear();
//! isNaN() function always check the given argument is not a number or a number, if the argument is number then returns false otherwise true, In this case it counts the "11" as a number so it will return false, and in 2nd case, it will found -8 which is a number so basically the output would be false again, but if we will pass "Nayan" it will return true, cause "Nayan" is not a number.....

// JS array Tasks
let fruits = ["🍇","🍉","🍊","🍌","🍍","🍓","🍒","🍎","🫐","🌽","🥑","🥕"];

fruits[8] = "🥦";

let thirdIndexElement = fruits[8];
console.log(thirdIndexElement);
console.log(fruits);

