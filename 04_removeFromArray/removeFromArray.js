const removeFromArray = function(incomingArray, ...valuesToRemove) {
    let removedValues = [] // array to store removed values
    for (const valueToRemove of valuesToRemove) {
        while (incomingArray.indexOf(valueToRemove) != -1) {
            removedValues = incomingArray.splice(incomingArray.indexOf(valueToRemove),1)
        }
    //     for (const element of incomingArray) {
    //         if (valueToRemove !== element) continue;
    //         const indexValueToRemove = incomingArray.indexOf(element);
    //         const removedValues = incomingArray.splice(indexValueToRemove,1);
    //     }
    }
    return incomingArray
};

// Do not edit below this line
module.exports = removeFromArray;
