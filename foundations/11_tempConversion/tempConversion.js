const convertToCelsius = function (fahr = 0) {
    return Number.parseFloat((((fahr - 32) * 5) / 9).toFixed(1));
};

const convertToFahrenheit = function (celc = 0) {
    return Number.parseFloat((celc * (9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
