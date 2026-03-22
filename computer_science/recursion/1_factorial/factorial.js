const factorial = function (numb) {
    if (numb < 0 || !Number.isInteger(numb)) return;
    if (numb === 0) return 1;
    return numb * factorial(numb - 1);
};

// Do not edit below this line
module.exports = factorial;
