const removeFromArray = function (arr,...target) {
    return arr.filter(num=> !target.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
