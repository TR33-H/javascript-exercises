const sumAll = function(num1, num2) {
    let larger;
    let smaller;
    let sum = 0;
    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    if(num1 > num2){
        larger = num1;
        smaller = num2;
    } else{
        larger = num2;
        smaller = num1;
    }

    for(let i = larger; i >= smaller; i--){
        sum += i; 
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
