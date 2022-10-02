const add = function(a,b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
    return 'ERROR';
  }
  return a + b;
};

const subtract = function(a,b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
    return 'ERROR';
  }
  return a - b;
};

const sum = function(arr) {
	let num = arr.filter(x => typeof x == 'number');
  return num.reduce((a,b) => a+b,0);
};

const multiply = function(arr) {
  let num = arr.filter(x => typeof x == 'number');
  return num.reduce((a,b) => a*b,1);
};

const power = function(a,b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
    return 'ERROR';
  }
  return a ** b;
};

const factorial = function(a) {
	if (typeof a !== 'number' ||
      a < 0) {
    return 'ERROR';
  }

  if (a == 0) {
    return 1;
  }

  let fac = 1;
  for (let i = 1; i <= a; i++) {
    fac *= i;
  } 
  return fac;
};
console.log(factorial(2));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
