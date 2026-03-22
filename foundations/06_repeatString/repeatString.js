const repeatString = function (str = "", repeat = 0) {
    let result = "";
    for (let i = 0; i < repeat; i++) {
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
