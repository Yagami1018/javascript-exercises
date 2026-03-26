const getTheTitles = function (array = [{ title, author }]) {
    return array.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
