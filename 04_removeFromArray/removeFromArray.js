const removeFromArray = function(array, num1, num2, num3, num4) {

    let deleteCount = 1;
    let isNum;

    while(array.indexOf(num1) != -1){ 
        isNum = array.indexOf(num1);
        array.splice(isNum, deleteCount);
    }
    while(array.indexOf(num2) != -1){
        isNum = array.indexOf(num2);
        array.splice(isNum, deleteCount);
    }
    while(array.indexOf(num3) != -1){
        isNum = array.indexOf(num3);
        array.splice(isNum,deleteCount);
    }
    while(array.indexOf(num4) != -1){
        isNum = array.indexOf(num4);
        array.splice(isNum, deleteCount);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
