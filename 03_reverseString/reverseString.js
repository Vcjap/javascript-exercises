const reverseString = function(stringToReverse) {
    let stringReversed = []
    for (const letter of stringToReverse) {
        stringReversed.unshift(letter)
    }
    return stringReversed.join("")
};

// Do not edit below this line
module.exports = reverseString;
