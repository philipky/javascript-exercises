const palindromes = function (str) {
    if (typeof str !== 'string') {
        return 'ERROR';
    }
    
    lowerStr = str.toLowerCase().replace(/[^a-z]/g,'');
    
    const arr = lowerStr.split('');
    
    if (arr.length <= 1) {
        return true;
    }
    
    const arrReverse = [...arr].reverse();
    
    let isPal = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arrReverse[i]) {
            isPal = false;
            break;
        }
    } 
    return isPal;
};
// palindromes('ZZZZ car, a man, a maracaz.')
// let a = "Hello hahaha 442 %$%^!.";
// console.log(a.toLowerCase().replace(/[^a-z]/g,''));

// Do not edit below this line
module.exports = palindromes;
