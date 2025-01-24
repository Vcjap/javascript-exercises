const removeFromArray = function(incomingArray = [], ...valuesToRemove) {
    for (const element of valuesToRemove) {
        const indexValuetoRemove = incomingArray.indexOf(element);
        const removedValues = incomingArray.splice(indexValuetoRemove,1);
    }
    return incomingArray
};

// Do not edit below this line
module.exports = removeFromArray;
