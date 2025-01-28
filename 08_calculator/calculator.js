const add = function(n1,n2) {
	return n1+n2;
};

const subtract = function(n1,n2) {
	return n1-n2;
};

const sum = function(arr) {
	let finalSum = arr.reduce((sum, item) => sum + item, 0);
  return finalSum;
};

const multiply = function(arr) {
	let finalSum = arr.reduce((sum, item) => sum * item, 1);
  return finalSum;
};

const power = function(num, power) {
	finalNum = num ** power;
  return finalNum;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
