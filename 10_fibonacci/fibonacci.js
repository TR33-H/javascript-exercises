const fibonacci = function(num, sequence = [1, 1]) {
    if(num < 0){
        return "OOPS";
    }
    if(num == 0){
        return 0;
    }
    if(num > 2){
        let sum = sequence.reduce((total, currentItem) =>{
            return total + currentItem;
        });
        sequence.shift();   //removes first num
        sequence.push(sum); //adds sum to end of array
        let newnum = num - 1;
        return fibonacci(newnum, sequence);
    }
    return sequence.pop();
    
};

// Do not edit below this line
module.exports = fibonacci;
