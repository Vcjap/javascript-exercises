const sumAll = function(n1,n2) {
    const minNum = Math.min(n1,n2)
    const maxNum = Math.max(n1,n2)
    let sumNum = 0
    for (lastNum = minNum; lastNum <= maxNum; lastNum++) {
        sumNum += lastNum
    }
    return sumNum
};

// Do not edit below this line
module.exports = sumAll;
