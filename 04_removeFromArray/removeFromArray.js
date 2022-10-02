const removeFromArray = function(oriArr, ...args) {
    return oriArr.filter(x => !args.includes(x));
   
};

// Do not edit below this line
module.exports = removeFromArray;
