const getTheTitles = function(books) {
    let bookTitles = [];
    for(title in books){
        bookTitles.push((books[title].title));
    }
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
