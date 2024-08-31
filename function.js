// # Simple function Related Practice Tasks

// ### Task-1  
// Take four parameters. Multiply the four numbers and then return the result 

function multiplyAll(a, b, c, d){
    let result = a * b * c * d;
    return result;
}

// ---

// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function getTheNumber(numb){
    let result;
    if(numb%2===1){
        result = numb * 2;
        return result;
    }else{
        result = numb / 2;
        return result;
    }
}

// ---

// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr){
    
    if(!Array.isArray(arr)){
        console.log("Not an array");
        return 
    }

    if(arr.every(Number.isInteger)){
        let totalLength = arr.length;
        let totalCount=0;
        
        for(let i = 0; i < arr.length; i++){
            totalCount += arr[i];
        }

        let avg = totalCount / totalLength;
        console.log(avg);
        return avg;
    }
    else{
        console.log("Array elements are not integers");
        return
    }
}

make_avg([2,5]);

console.clear();

// ---

// ### Task-4  
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str){
    let totalZeros = 0;
    let otherNumbers = 0;
    for(index in str){
        if(str[index]==0){
            totalZeros++
        }
        else{
            otherNumbers++
        }
    }
    console.log(otherNumbers);
    console.log(totalZeros);
    return totalZeros;
}



// ---

// ### Task-5 
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`


function odd_even(value){
    if(Number.isInteger(value)){
        if(value%2===0){
            console.log("Even Number");
        }
        else{
            console.log("Odd Number");
        }
    }
    else{
        console.log("decimal number");
    }
}

odd_even(11457870)