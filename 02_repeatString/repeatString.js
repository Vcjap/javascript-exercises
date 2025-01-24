const repeatString = function(initialString, times) {
    let finalString = ""
    times < 0 ? finalString += "ERROR" : finalString = ""; // if times < 0, return an error. The loop won't be run.
    for (i = 0; i < times; i++) {
        finalString += initialString
    }
    return finalString
};

// Do not edit below this line
module.exports = repeatString;
