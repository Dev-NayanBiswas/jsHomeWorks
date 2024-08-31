/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burger = 500.0;
let coke = 30;

let totalBill = 0;

if(burger > 500){
    coke = 0;
    totalBill = burger + coke;
    console.log("You got a free coke 🍷, you will pay"+ totalBill + "Taka");
} else{
    totalBill = burger + coke;
    console.log("You will pay"+ totalBill + "Taka");
}