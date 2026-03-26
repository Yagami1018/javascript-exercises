const reverseString = function (word="") {
    return word.split("").sort((a,b)=> -1).join("");
};

// Do not edit below this line
module.exports = reverseString;
