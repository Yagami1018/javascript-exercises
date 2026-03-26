const getAge = (person) => {
    person.yearOfDeath ??= new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function (people = []) {
    return people.reduce((a, b) => getAge(b) > getAge(a) ? b : a);
};

// Do not edit below this line
module.exports = findTheOldest;
