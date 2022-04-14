const findTheOldest = function (arr) {
    const currentDate = new Date().getFullYear();
    return arr.reduce((previous, next) => {
        const prevPerson = (previous.yearOfDeath ? previous.yearOfDeath : currentDate) - previous.yearOfBirth;
        const nextPerson = (next.yearOfDeath ? next.yearOfDeath : currentDate) - next.yearOfBirth;
        if (prevPerson > nextPerson) return previous;
        else return next;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
