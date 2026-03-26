const leapYears = function (year = 0) {
    const isCentury = year % 100 === 0;
    const isDivisibleBy4 = year % 4 === 0;
    const isDivisibleBy400 = year % 400 === 0;
    return isDivisibleBy4 && (!isCentury || isDivisibleBy400);
};
// Do not edit below this line
module.exports = leapYears;
