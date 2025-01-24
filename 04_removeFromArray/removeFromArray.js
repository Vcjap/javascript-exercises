const removeFromArray = function(incomingArray, ...valuesToRemove) {
    console.log(valuesToRemove);
    for (const valueToRemove of valuesToRemove) {
        for (const element of incomingArray) {
            if (valueToRemove !== element) continue;
            const indexValueToRemove = incomingArray.indexOf(element);
            const removedValues = incomingArray.splice(indexValueToRemove,1);
        }
    }
    console.log(incomingArray);
    return incomingArray
};

// Do not edit below this line
module.exports = removeFromArray;
