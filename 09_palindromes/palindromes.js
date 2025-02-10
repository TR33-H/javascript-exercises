function reverseString(string){
    //convert to array
    string = string.split('');
    //reverse
    string = string.reverse();
    return string.join('');
}

const palindromes = function (word) {
    word = word.replace(/\s/g, "");
    word = word.replace(/[,.!]/g, "");
    word = word.toLowerCase();
    let drow = reverseString(word);
    if(word == drow){ 
        return true;
    } else{
        return false;
    }
    
    
};

// Do not edit below this line
module.exports = palindromes;
