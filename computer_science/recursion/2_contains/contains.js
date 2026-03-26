const contains = function (obj = {}, props) {
    const values = Object.values(obj);

    if (values.includes(props)) return true;

    const nestedObj = values.filter(value => typeof value === "object" && value !== null);
    return nestedObj.some(nestedObj => contains(nestedObj, props));
};

// Do not edit below this line
module.exports = contains;
