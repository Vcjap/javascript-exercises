const sumAll = function(n1,n2) {
    //Get min and max 
    const minNum = Math.min(n1,n2)
    const maxNum = Math.max(n1,n2)

    //Check other conditions
    isNumNegative = minNum < 0;
    // Need to check n1 and n2 because Math.min and Math.max turn strings into numbers
    isNumNotAnInteger = !(Number.isInteger(n1) && Number.isInteger(n2)); 
    if (isNumNegative || isNumNotAnInteger) {
        return "ERROR";
    }
    // Create Sum
    let sumNum = 0
    for (lastNum = minNum; lastNum <= maxNum; lastNum++) {
        sumNum += lastNum
    }
    return sumNum
};

// Do not edit below this line
module.exports = sumAll;
