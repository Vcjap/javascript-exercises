const leapYears = function(year) {
    const divisibleBy4 = year % 4 == 0;  
    const divisibleBy100 = year % 100 == 0;
    const divisibleBy400 = year % 400 == 0;
    
    const isLeapYear = divisibleBy400 || divisibleBy4 && !divisibleBy100
    
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
