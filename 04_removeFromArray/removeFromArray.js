const removeFromArray = function(incomingArray, valueToRemove) {
    const indexValuetoRemove = incomingArray.indexOf(valueToRemove);
    const removedValues = incomingArray.splice(indexValuetoRemove,1);
    return incomingArray
};

// Do not edit below this line
module.exports = removeFromArray;
