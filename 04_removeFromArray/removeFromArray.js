const removeFromArray = function(incomingArray, ...valuesToRemove) {
    let removedValues = [] // array to store removed values
    for (const valueToRemove of valuesToRemove) {
        while (incomingArray.indexOf(valueToRemove) != -1) { // while valueToRemove finds a match in the array, execute the remove function
            removedValues = incomingArray.splice(incomingArray.indexOf(valueToRemove),1)
        }
    }
    return incomingArray
};

// Do not edit below this line
module.exports = removeFromArray;
