/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let fare = 800;
let students = false;
let age =60;

if(age < 10){
    fare = 0;
    console.log("Free fare",fare);
}else if(students){
     fare = fare * 50/100;
    console.log("50% discount", fare);

}else if(age >= 60){
    fare = fare * 15/100;
    console.log("15% Discount", fare);
}
else{
    console.log(fare);
}


