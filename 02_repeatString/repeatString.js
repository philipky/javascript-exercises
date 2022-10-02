const repeatString = function(string,num) {    
    if (typeof num == 'number') {
        num = parseInt(num);
    } else {
        return 'ERROR';
    }

    if (num < 0) {
        return 'ERROR';
    } else if (num === 0) {
        return '';
    } else {
        let outputStr = '';
        for (let i = 1; i <= num; i++) {
            outputStr += string;
        }
        return outputStr;
    }

};

// Do not edit below this line
module.exports = repeatString;
