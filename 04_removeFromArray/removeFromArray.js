const removeFromArray = function (arr, ...toRemove) {
    for (const item of toRemove) {
        if (arr.indexOf(item) !== -1) {
            arr.splice(arr.indexOf(item), 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
