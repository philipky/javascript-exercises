const fibonacci = function(ind) {
    //I will write a recursive function instead of constructing a Fibonacci sequence in advance.
    if (typeof ind == 'string') {
        ind = parseInt(ind);
    }
    if (typeof ind !== 'number' || ind < 1) {
        return 'OOPS';
    }
    if (ind == 1 || ind == 2) {
        return 1;
    }
    return fibonacci(ind-1) + fibonacci(ind-2);
};
// console.log(fibonacci(6));
// Do not edit below this line
module.exports = fibonacci;
