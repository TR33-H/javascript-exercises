const reverseString = function(name) {
    let string = '';
    for(let i = name.length - 1; i >= 0 ; i--){
        string = string + name[i];
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
