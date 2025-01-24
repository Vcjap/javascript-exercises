const repeatString = function(initialString, times) {
    let finalString = ""
    for (i = 0; i < times; i++) {
        finalString += initialString
    }
    return finalString
};

// Do not edit below this line
module.exports = repeatString;
